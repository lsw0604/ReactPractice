import Post from './models/post';

export default function createFakeData() {
  // 0, 1, ... 39로 이루어진 배열을 생성한 후 포스트 데이터로 변환
  const posts = [...Array(40).keys()].map(i => ({
    title: `Post #${i}`,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate arcu. Sed pharetra lectus purus, ut semper orci facilisis a. Morbi eu tellus tincidunt, condimentum mauris eu, viverra velit. Nulla urna eros, aliquam ut rhoncus sit amet, pretium nec lectus. Nullam finibus, risus et ornare viverra, lacus tellus malesuada arcu, in venenatis metus nibh sed diam. In ac quam efficitur, facilisis tortor eu, dapibus velit. Etiam sodales varius ligula, ut rhoncus est imperdiet quis. Duis tempor at ipsum a lacinia. Donec vestibulum dolor nec auctor posuere.',
    tags: ['fake', 'data']
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  })
}