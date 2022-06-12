import React, { useState } from 'react';
import './style.css';

import { FolderIcon, DeleteIcon, EditIcon, FilledFolder, FolderNormalIcon } from './icons';

export default function App() {
  const [showIcons, setShowIcons] = useState('inline')
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


  function hideIcons(e) {

    // setShowIcons('none')


  }

  function handleShowIcons(e) {

    // setShowIcons('inline')

  }




  function buildTree(node, level = 0) {
    if (node.type === "directory") {
      const children = node.children.map((x) => buildTree(x, level + 1));
      return (
        <div id={level} key={node.name} onMouseEnter={handleShowIcons} onMouseLeave={hideIcons} style={{ paddingLeft: level * 5 }} className='dir'>
          <FolderNormalIcon />
          {node.name}
          <span style={{ display: showIcons }} >
            <FolderIcon />
            <EditIcon />
            <DeleteIcon />
          </span>
          <div>{children}</div>
        </div>
      );
    } else if (node.type === "file") {
      return <div key={node.name} style={{ paddingLeft: level * 10 }} className='file'>{node.name}</div>;
    }
  }



  return (
    <div>
      {buildTree(tree)}
    </div>
  );
}
