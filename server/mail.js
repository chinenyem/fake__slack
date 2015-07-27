Meteor.startup(function () {
  smtp = {
    username: 'chnw1947@gmail.com',
    password: 'qAOVBdshRLRanLYwrEAclg',
    server:   'smtp.mandrillapp.com',
    port: 587
 };
    
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});