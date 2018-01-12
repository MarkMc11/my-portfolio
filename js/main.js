import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
  'title': "AWS Certified Developer Associate",
  'image': {
    'desc': "example screenshot of a project involving code",
    'src': "images/example1.png",
    'comment': ""
    }
  },
  {
  'title': "AWS Certified SysOps Administrator Associate",
  'image': {
    'desc': "example screenshot of a project involving code",
    'src': "images/example1.png",
    'comment': ""
    }
  },
  {
  'title': "AWS Certified Solutions Architect Associate",
  'image': {
    'desc': "example screenshot of a project involving code",
    'src': "images/example1.png",
    'comment': ""
    }
  },
  {
  'title': "AWS Certified Solutions Architect Professional",
  'image': {
    'desc': "example screenshot of a project involving code",
    'src': "images/example1.png",
    'comment': ""
    }
  },
  {
  'title': "AWS Certified DevOps Professional",
  'image': {
    'desc': "example screenshot of a project involving code",
    'src': "images/example1.png",
    'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
