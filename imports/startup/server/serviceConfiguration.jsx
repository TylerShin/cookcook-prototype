import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(() => {
  ServiceConfiguration.configurations.upsert(
    { service: 'facebook' },
    {
      $set: {
        appId: Meteor.settings.private.DEV_FACEBOOK_APP_ID,
        secret: Meteor.settings.private.DEV_FACEBOOK_SECRET,
      },
    },
  );
});
