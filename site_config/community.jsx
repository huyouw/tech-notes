import React from 'react';

export default {
  'en-us': {},
  'zh-cn': {
    barText: '标签',
    ecos: {
      title: '博客标签',
      list: [
        {
          title: '生态系统1',
          content: <span>生态系统1</span>,
          tags: [
            {
              text: '标签1',
              link: '',
              bgColor: '#7A63FC',
            },
            {
              text: '标签2',
              link: '',
              bgColor: '#00D0D9',
            },
            {
              text: '标签3',
              link: '',
              bgColor: '#00D0D9',
            },
          ],
        },
        {
          title: '生态系统2',
          content: <span>生态系统2</span>,
          tags: [
            {
              text: '标签1',
              link: '',
              bgColor: '#7A63FC',
            },
            {
              text: '标签2',
              link: '',
              bgColor: '#00D0D9',
            },
            {
              text: '标签3',
              link: '/zh-cn/docs/demo1.html',
              bgColor: '#00D0D9',
            },
            {
              text: '标签4',
              link: '',
              bgColor: '#00D0D9',
            },
          ],
        },
      ],
    },
  },
};
