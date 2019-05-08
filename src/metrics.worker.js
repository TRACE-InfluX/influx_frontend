onmessage = function(e) {
  let influencers = e.data
  let length = influencers.length

  for(let influencer of influencers) {
    influencer.weights = JSON.parse(atob(influencer.weights.slice(2,-1)))
  }

  let accumulator = (pool, next) => {
    for(let key of Object.keys(next.weights)) {
      pool[key] = next.weights[key] + (pool[key] || 0)
    }
    return pool
  }

  let average_weights = influencers.reduce(accumulator,{})

  for (let key in average_weights) {
    average_weights[key] = (average_weights[key] - 1) / length
  }

  for(let influencer of influencers) {
    let new_weights = {}
    for(let key in influencer.weights) {
      let avg = average_weights[key]
      if (avg) {
        new_weights[key] = (influencer.weights[key] - avg) / (avg + 1)
        if (key[0] == '#') {
          new_weights[key] *= 5
        }
      }
    }
    influencer.weights = new_weights
  }

  let account_weights = influencers.find(i => i.username == '@serotoninplus').weights

  for(let influencer of influencers) {
    influencer.relevance = 0
    for(let key in account_weights) {
      let weight = influencer.weights[key]
      if (weight) {
        influencer.relevance += account_weights[key] + weight
      }
    }
  }

  influencers.sort((a,b) => b.engagement - a.engagement)
  for(let i = 0; i < length; ++i) {
    influencers[i].engagement = 100 * (length - i) / length
  }

  influencers.sort((a,b) => b.relevance - a.relevance)
  for(let i = 0; i < length; ++i) {
    influencers[i].relevance = 100 * (length - i) / length
  }

  influencers.sort((a,b) => b.activity - a.activity)
  for(let i = 0; i < length; ++i) {
    influencers[i].activity = 100 * (length - i) / length
  }

  influencers.sort((a,b) =>
    b.activity + b.engagement + b.relevance 
  - a.activity - a.engagement - a.relevance)

  postMessage(influencers)
}