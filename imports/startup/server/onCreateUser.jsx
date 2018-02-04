import { Accounts } from 'meteor/accounts-base';
import { _ } from 'meteor/underscore';

Accounts.onCreateUser((options, user) => {
  if (user.services && user.services.facebook) {
    const profile = _.pick(user.services.facebook, 'name', 'email', 'gender', 'locale');
    const customizedUser = { ...user, ...{ profile } };
    return customizedUser;
  }
  return user;
});
