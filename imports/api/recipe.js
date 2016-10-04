import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Recipe = new Mongo.Collection('recipe');

if (Meteor.isServer) {
  Meteor.publish('recipe', () => {
    return Recipe.find();
  });
}
