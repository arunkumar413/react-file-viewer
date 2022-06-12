import React from 'react';
import './style.css';

import { FolderIcon, DeleteIcon, EditIcon, FilledFolder } from './icons';

export default function App() {
  const tree = {
    path: 'photos',
    name: 'photos',
    size: 600,
    type: 'directory',
    children: [
      {
        path: 'photos/summer',
        name: 'summer',
        size: 400,
        type: 'directory',
        children: [
          {
            path: 'photos/summer/june',
            name: 'june',
            size: 400,
            type: 'directory',
            children: [
              {
                path: 'photos/summer/june/windsurf.jpg',
                name: 'windsurf.jpg',
                size: 400,
                type: 'file',
                extension: '.jpg',
              },
            ],
          },
        ],
      },
      {
        path: 'photos/winter',
        name: 'winter',
        size: 200,
        type: 'directory',
        children: [
          {
            path: 'photos/winter/january',
            name: 'january',
            size: 200,
            type: 'directory',
            children: [
              {
                path: 'photos/winter/january/ski.png',
                name: 'ski.png',
                size: 100,
                type: 'file',
                extension: '.png',
              },
              {
                path: 'photos/winter/january/snowboard.jpg',
                name: 'snowboard.jpg',
                size: 100,
                type: 'file',
                extension: '.jpg',
              },
            ],
          },
        ],
      },
    ],
  };

  var items = [];
  var depth = 0;

  function buildTree(children) {
    depth++;
    children.forEach(function (item, index) {
      if (item.type === 'directory') {
        items.push(
          <div key={index.toString()} style={{ paddingLeft: depth * 10 }}>
            <span className="dir">
              {' '}
              <FilledFolder /> {item.name} <FolderIcon /> <DeleteIcon />{' '}
              <EditIcon />
            </span>
          </div>
        );
        buildTree(item.children);
      } else if (item.type === 'file') {
        items.push(
          <div key={index.toString()} style={{ paddingLeft: depth * 15 }}>
            {' '}
            <span className="file">{item.name}</span>
          </div>
        );
      }
    });
  }

  return (
    <div>
      {buildTree(tree.children)}
      {items}
    </div>
  );
}
