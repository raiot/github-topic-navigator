import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import {waitFor, render, screen} from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import MainSection from './MainSection';
import {GET_TOPIC} from '../operations/queries/getTopic';

jest.mock('@apollo/client', () => ({
  ...(jest.requireActual('@apollo/client')),
  makeVar: () => {
    return {};
  },
  useReactiveVar: () => {
    return { search: { term: 'react' } };
  },
}));

jest.mock('../operations/mutations', () => {
  return { mutations: {
    searchMutation: () => ''
  }}
});

const mocks = [{
  request: {
    query: GET_TOPIC,
    variables: {},
  },
  result: {
    data: {
      topic: {
        relatedTopics: [{
          id: '12',
          name: 'angular',
          stargazerCount: 123
        }]
      },
    },
  },
}];

describe('Test suite of the MainSection container', () => {
  it('renders without error', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MainSection />
      </MockedProvider>,
    );
    expect(screen.getByText('loading...')).toBeTruthy();
  });

  it('should render the related topic angular', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MainSection />
      </MockedProvider>,
    );
    await new Promise(resolve => setTimeout(resolve, 0));
    await waitFor(() => {
      expect(screen.getByText('angular')).toBeTruthy();
    });
  });
});
