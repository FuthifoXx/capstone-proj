const fs = require('fs');

const posts = JSON.parse(
  fs.readFileSync(`${__dirname}/../Capstone/dev-data/data/blogs-simple.json`)
);

exports.getAllPosts = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: posts.length,
    data: {
      posts,
    },
  });
};

exports.getPost = (req, res) => {
  const id = req.params.id * 1;
  const post = posts.find((el) => el.id === id);

  if (!post) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    data: {
      post,
    },
  });
};

exports.createPost = (req, res) => {
  const newId = posts[posts.length - 1].id + 1;
  const newPost = Object.assign({ id: newId }, req.body);

  posts.push(newPost);

  fs.writeFile(
    `${__dirname}/Capstone/dev-data/data/blogs-simple.json`,
    JSON.stringify(posts),
    (err) => {
      res.status(201).json({
        requestedAt: req.requestTime,
        status: 'success',
        data: {
          posts: newPost,
        },
      });
    }
  );
};

exports.updatePost = (req, res) => {
  if (req.params.id * 1 > posts.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid Id',
    });
  }
  res.status(200).json({
    requestedAt: req.requestTime,
    status: 'success',
    data: {
      post: '<Updated post here...>',
    },
  });
};

exports.deletePost = (req, res) => {
  if (req.params.id * 1 > posts.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    requestedAt: req.requestTime,
    status: 'success',
    data: null,
  });
};
