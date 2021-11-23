export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Human = {
  __typename?: 'Human';
  name: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  friends: Array<Human>;
};

export type Meetup = {
  __typename?: 'Meetup';
  date: Scalars['Date'];
  attendees: Array<Human>;
};

export type Query = {
  __typename?: 'Query';
  meetups: Array<Meetup>;
};


export type QueryMeetupsArgs = {
  last?: InputMaybe<Scalars['Int']>;
};

let meetup: Meetup = {}