export function process(influencers, cache) {

  // Skip heavy processing if results are cached
  if (cache) {
    let sorted = []
    let c = JSON.parse(cache)
    for(let influencer of influencers) {
      let id = influencer.id
      influencer.engagement = c.e[id]
      influencer.relevance  = c.r[id]
      influencer.activity   = c.a[id]
      sorted[c.s[id]] = influencer
    }
    return { influencers: sorted, cache }
  }

  let length = influencers.length

  // Decode Weights from Base64 String to JSON object
  for(let influencer of influencers) {
    influencer.weights = JSON.parse(atob(influencer.weights.slice(2,-1)))
  }

  // The accumulator function does a value-inclusive set union on each weight file
  let accumulator = (pool, next) => {
    for(let key in next.weights) {
      pool[key] = next.weights[key] + (pool[key] || 0)
    }
    return pool
  }

  // Applies the accumulator to each influencer, resulting in a combined set of all weights
  let average_weights = influencers.reduce(accumulator,{})

  // Subtract 1 to remove outliers, then divide by length to average across all influencers
  for (let key in average_weights) {
    average_weights[key] = (average_weights[key] - 1) / length
  }

  // After obtaining an "average influencer", each influencer is compared to the average
  for(let influencer of influencers) {
    let new_weights = {}

    // A weighted proportional distance from average is calculated for each key 
    for(let key in influencer.weights) {
      let avg = average_weights[key]
      
      // This check filters out the outliers
      if (avg) {
        
        // Subtract to get a distance from average, then reverse the decrement before normalizing
        new_weights[key] = (influencer.weights[key] - avg) / (avg + 1)

        // Extra weight is added to hashtags since they represent more powerful information
        if (key[0] == '#') {
          new_weights[key] *= 5
        }
      }
    }
    influencer.weights = new_weights
  }

  // For now an account is taken from the list to use as a base
  // Later this will be done through website analysis
  let account_weights = influencers.find(i => i.username == '@serotoninplus').weights

  // Relevance Calculation
  // After trying a few things, a simple value set intersection seems to produce the best results
  for(let influencer of influencers) {
    influencer.relevance = 0

    // This is done by summing up the values in each side's shared keys
    for(let key in account_weights) {
      let weight = influencer.weights[key]
      if (weight) {
        influencer.relevance += account_weights[key] + weight
      }
    }
  }

  cache = {e:{},r:{},a:{},s:{}}
  // Sort and reweight engagement based on percentile
  influencers.sort((a,b) => b.engagement - a.engagement)
  for(let i = 0; i < length; ++i) {
    let val = 100 * (length - i) / length
    influencers[i].engagement  = val
    cache.e[influencers[i].id] = val
  }

  // Sort and reweight relevance based on percentile
  influencers.sort((a,b) => b.relevance - a.relevance)
  for(let i = 0; i < length; ++i) {
    let val = 100 * (length - i) / length
    influencers[i].relevance   = val
    cache.r[influencers[i].id] = val
  }

  // Sort and reweight activity based on percentile
  influencers.sort((a,b) => b.activity - a.activity)
  for(let i = 0; i < length; ++i) {
    let val = 100 * (length - i) / length
    influencers[i].activity    = val
    cache.a[influencers[i].id] = val
  }

  // Final sort
  influencers.sort((a,b) =>
    b.activity + b.engagement + b.relevance 
  - a.activity - a.engagement - a.relevance)
  for(let i = 0; i < length; ++i) {
    cache.s[influencers[i].id] = i
  }
  cache = JSON.stringify(cache)

  // We're done \o/
  return { influencers, cache }
}