import Vue from 'vue'

// From folder
function importComponents (context) {
  
  let components = {}
  
  context.keys().forEach(key => {

    // path -> split_by_directory -> get_last -> trim ".vue"
    let name = key.split('/').slice(-1)[0].slice(0,-4)
      // PascalCase -> hyphenated-case
      .replace(/([A-Z])/g, ' $1').slice(1).split(' ').join('-').toLowerCase()

    components[name]  = context(key).default
    Vue.component(name, context(key).default)
  })

  return components
}

export default importComponents(require.context("./", true, /\.vue$/))