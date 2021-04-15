import { define } from 'typeorm-seeding';
import { User } from '../../entity/User';
import Faker = require('faker');

define(User, (faker: typeof Faker) => {

  const user = new User()

  user.firstName = faker.name.firstName(0);
  user.lastName = faker.name.lastName();
  user.age = faker.datatype.number(65);

  return user;
});
