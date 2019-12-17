module.exports = {
  login: require('./login'),
  register: require('./register'),
  invited: require('./invited'),
  revision: require('./revision'),
  comment: require('./comment'),
  me: {
    user: require('./me/user'),
    password: require('./me/password'),
    imagetype: require('./me/imagetype'),
    apiToken: require('./me/apiToken'),
  },
  admin: {
    app: require('./admin/app'),
    siteUrl: require('./admin/siteUrl'),
    mail: require('./admin/mail'),
    aws: require('./admin/aws'),
    plugin: require('./admin/plugin'),
    securityGeneral: require('./admin/securityGeneral'),
    securityPassportLocal: require('./admin/securityPassportLocal'),
    securityPassportLdap: require('./admin/securityPassportLdap'),
    securityPassportSaml: require('./admin/securityPassportSaml'),
    securityPassportBasic: require('./admin/securityPassportBasic'),
    securityPassportGoogle: require('./admin/securityPassportGoogle'),
    securityPassportGitHub: require('./admin/securityPassportGitHub'),
    securityPassportTwitter: require('./admin/securityPassportTwitter'),
    securityPassportOidc: require('./admin/securityPassportOidc'),
    slackIwhSetting: require('./admin/slackIwhSetting'),
    slackSetting: require('./admin/slackSetting'),
    userGroupCreate: require('./admin/userGroupCreate'),
    notificationGlobal: require('./admin/notificationGlobal'),
  },
};
