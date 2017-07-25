
exports.seed = function(knex, Promise) {

  const text1 = [
    "Bears endure stings to get the prized pupae, larvae, and eggs in the brood comb of a hive. Protective adult bees sting bears’ faces and ears but have a hard time penetrating the fur on the rest of the body. After bears get the brood comb and perhaps some honey, they hurry away and shake bees out of their fur like they shake water.",
  ].join("\n")

  const text2 = [
    "Plump in all the right places.  Apitherapy, or bee venom therapy, is an age-old practice that uses bee by-product—including venom, honey and pollen—as medicine.",
  ].join("\n\n")

  const text3 = [
    "This bumble bee is starting the pollination process without even realizing it! When bees land on a flower, like this milkweed flower, their feet often slip into a little groove that holds pollen sacs. When the bee flies away it carries off this sac like a saddlebag stuck on its feet.",
  ].join("\n\n")

  return knex('comments').del()
    .then(() => knex('posts').del())
    .then(function () {
      return Promise.all([
        createPost(
          'Not Fair',
          text1,
          'The Bear',
          'http://www.kyforward.com/wp-content/uploads/2016/05/Black-Bear-1.jpg?h=350&auto=compress',
          new Date(2017, 6, 16)
        ),
        createPost(
          'All Natural',
          text2,
          'Lipstick Lula',
          'https://fashionista.com/.image/t_share/MTIwOTI5Njk5NDA4MDQxODc0/image-title2.jpg?h=350&auto=compress',
          new Date(2017, 6, 13)
        ),
        createPost(
          "Me next",
          text3,
          'Hot Thistle',
          'https://cdn2.hubspot.net/hubfs/2757166/Imported_Blog_Media/1280px-Honeybee_landing_on_milkthistle02-300x200.jpg?h=350&auto=compress',
          new Date(2017, 6, 11)
        ),
      ])
    })
    .then(function (postIds) {
      return Promise.all([
        knex('comments').insert({post_id: postIds[0], content: 'No, seriously!'}),
        knex('comments').insert({post_id: postIds[1], content: 'Totally the best!'}),
        knex('comments').insert({post_id: postIds[2], content: 'So HOT!'}),
      ])
    })

  function createPost(title, body, author, image_url, created_at) {
    return knex('posts')
      .insert({title, body, author, image_url, created_at})
      .returning('id')
      .then(ids => ids[0])
  }
};
