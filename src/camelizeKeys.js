import deepMapKeys from 'deep-map-keys'
import camelize from 'camelize'

const camelizeKeys = object => deepMapKeys(object, camelize)

export default camelizeKeys
