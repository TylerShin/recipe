import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Task = new Mongo.Collection('task');

if (Meteor.isServer) {
  Meteor.publish('task', () => {
    return Task.find();
  });
}
