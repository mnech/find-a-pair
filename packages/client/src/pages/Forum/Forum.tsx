import React from 'react';
import './forum.scss';

const forums = {
  // TODO api
  category: {
    title: 'Category title',
    posts: [
      {
        title: 'Title',
        description: 'Description',
        count: '576',
      },
      {
        title: 'Title2',
        description: 'Description2',
        count: '576',
      },
    ],
  },
  category2: {
    title: 'Category2 title',
    posts: [
      {
        title: 'Title',
        description: 'Description',
        count: '576',
      },
      {
        title: 'Title2',
        description: 'Description2',
        count: '576',
      },
    ],
  },
};

const Forum = () => {
  return (
    <div>
      <header className="border-bottom border-info p-4">Forum</header>

      <div className="p-5">
        {Object.values(forums).map(item => {
          return (
            <div key={item.title} className="mt-4">
              <div className="forum-category rounded-top">
                <div className="p-3">{item.title}</div>
              </div>

              <div>
                <div className="forum-head d-flex flex-row bg-dark text-light">
                  <div className="p-3 flex-grow-1">Forums</div>
                  <div className="p-3">Posts</div>
                </div>

                {item.posts.map(item => {
                  return (
                    <div
                      key={item.title}
                      className="p-3 forum-topic d-flex border-bottom bg-light">
                      <div className="d-flex flex-column flex-grow-1">
                        <span className="text-info fw-bold">
                          <a href="#">{item.title}</a>
                        </span>
                        <span className="text-muted">{item.description}</span>
                      </div>

                      <div>
                        <span className="center">{item.count}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forum;
