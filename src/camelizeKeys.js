import deepMapKeys from 'deep-map-keys'
import camelcase from 'lodash.camelcase'

const camelizeKeys = object => deepMapKeys(object, camelcase)

export default camelizeKeys
