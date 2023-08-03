BEGIN;

SET client_encoding = 'LATIN1';

CREATE TABLE user (
    id text NOT NULL,
    login text NOT NULL,
    password text NOT NULL,
    version integer,
    createdAt integer,
    updatedAt integer,
)

CREATE TABLE track (
    id text NOT NULL,
    name text NOT NULL,
    artistId text,
    albumId text,
    duration: integer,
)

CREATE TABLE artist (
    id text NOT NULL,
    name text NOT NULL,
    grammy boolean NOT NULL
)

CREATE TABLE album (
    id text NOT NULL,
    name text NOT NULL,
    year integer NOT NULL,
    artistId text
)

CREATE TABLE favorites (
    id text NOT NULL
)
