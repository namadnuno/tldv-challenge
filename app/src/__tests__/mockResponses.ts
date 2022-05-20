const videosResponse = {
  data: [
    {
      id: 1,
      attributes: {
        slug: 'etLHPhLy8Q0',
        title: 'tl;dv for Google Meet - Product Hunt Launch Video',
        url: 'https://www.youtube.com/watch?v=etLHPhLy8Q0',
        isPublic: true,
        createdAt: '2022-05-20T08:47:29.364Z',
        updatedAt: '2022-05-20T08:55:37.796Z',
        publishedAt: '2022-05-20T08:55:37.791Z',
      },
    },
    {
      id: 2,
      attributes: {
        slug: 'lE_pXfIITpI',
        title: 'tl;dv for Google Meet - All you need to know',
        url: 'https://www.youtube.com/watch?v=lE_pXfIITpI',
        isPublic: true,
        createdAt: '2022-05-20T08:47:29.364Z',
        updatedAt: '2022-05-20T08:55:37.796Z',
        publishedAt: '2022-05-20T08:55:37.791Z',
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 1,
    },
  },
};

const singleVideoResponse = {
  data: {
    id: 1,
    attributes: {
      slug: 'etLHPhLy8Q0',
      title: 'tl;dv for Google Meet - Product Hunt Launch Video',
      url: 'https://www.youtube.com/watch?v=etLHPhLy8Q0',
      isPublic: true,
      createdAt: '2022-05-20T08:47:29.364Z',
      updatedAt: '2022-05-20T08:55:37.796Z',
      publishedAt: '2022-05-20T08:55:37.791Z',
    },
  },
  meta: {},
};

export {
  videosResponse,
  singleVideoResponse,
};
