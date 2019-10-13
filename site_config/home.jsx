import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'Tech-Notes',
      briefIntroduction: '',
      buttons: [
        {
          text: '我的博客',
          link: '/zh-cn/blog/index.html',
          type: 'primary',
        },
        {
          text: '查看Github',
          link: '',
          type: 'normal',
        },
      ],
    },
    introduction: {
     /* title: '开源产品的介绍',
      desc: '开源产品的简单介绍，提供一些该产品的优点、特性描述等',
      img: '/img/architecture.png',*/
    },
    features: {
      title: '最近更新',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '更新1',
          content: '特性1的简单概括',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '更新2',
          content: '特性2的简单概括',
        },
        {
          img: '/img/feature_service.png',
          title: '更新3',
          content: '特性3的简单概括',
        },
        {
          img: '/img/feature_hogh.png',
          title: '更新4',
          content: '特性4的简单概括',
        },
      ],
    },
    start: {
      title: '快速开始',
      desc: '简单描述',
      img: '/img/quick_start.png',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/demo1.html',
      },
    },
  },
  'en-us': {},
};
