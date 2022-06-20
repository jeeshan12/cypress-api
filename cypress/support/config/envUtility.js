const { envConfig } = require('./env')

class EnvUtility {
  constructor(environment = 'int') {
    this.environment = environment
  }
  getEnvironmentConfig() {
    return envConfig[this.environment]
  }
}

module.exports = {
  EnvUtility: EnvUtility,
}
