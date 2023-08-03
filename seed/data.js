import db from "../db/connection.js";
import Dog from "../models/Dog.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: "Syd123",
    email: "syd@email.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssword55!", 11),
  });

  const user2 = new User({
    username: "Adam123",
    email: "adam@email.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssword55!", 11),
  });

  const user3 = new User({
    username: "Coby123",
    email: "Coby@email.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssword55!", 11),
  });

  const user4 = new User({
    username: "Pavlos123",
    email: "Pavlos@email.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssword55!", 11),
  });

  const user5 = new User({
    username: "Amanda123",
    email: "Amanda@email.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssword55!", 11),
  });

  const user6 = new User({
    username: "Melissa123",
    email: "Melissa@email.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssword55!", 11),
  });

  const user7 = new User({
    username: "Allison123",
    email: "Allison@email.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssword55!", 11),
  });

  const user8 = new User({
    username: "Nicole123",
    email: "Nicole@email.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssword55!", 11),
  });

  await user1.save();
  await user2.save();
  await user3.save();
  await user4.save();
  await user5.save();
  await user6.save();
  await user7.save();
  await user8.save();

  const dog1 = new Dog({
    breed: "Pitbull",
    name: "Queso",
    age: 4,
    about:
      "I am the happiest pittie who loves fast car-rides and getting zoomies in my backyard. I am looking for a long-term mate who is down for adventure, long walks on the weekend, and is ready to do tricks for treats!",
    gender: "M",
    image:
      "https://assets3.thrillist.com/v1/image/3096778/792x594/scale;webp=auto;jpeg_quality=60.jpg",
    likes: [],
    user: user1,
  });

  const dog2 = new Dog({
    breed: "Goldendoodle",
    name: "Taco",
    age: 2,
    about:
      "The name is fitting, my favorite day is taco tuesdays 🌮. Let's cook together, and watch a movie and cuddle. Plus, I have the sofest fur for cuddling...",
    gender: "F",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F04%2F15%2Fgoldendoodle-running-on-beach-1723968841-2-2000.jpg",
    likes: [],
    user: user1,
  });

  const dog3 = new Dog({
    breed: "Shih Tzu",
    name: "Peaches",
    age: 2,
    about:
      "Most people spell my name as 'Shitzu' but it's 'Shih Tzu'... yappy, cute and seeking a mate to calm me down. Looking to spend my time shopping, laying out in the sun, sipping water, and taking dips in the pool. If you are ready for lazy but fashionable days, you are in for a treat.",
    gender: "F",
    image:
      "https://woofspedia.com/wp-content/uploads/2021/10/Dogs-1-750x500.jpg",
    likes: [],
    user: user2,
  });

  const dog4 = new Dog({
    breed: "Bulldog",
    name: "Concrete",
    age: 5,
    about:
      "I like to play ruff but I am gentle at heart. A comedian, I am actually famous on social media. Follow me at @concretethebull on Instagram to get a feel for my personality. ",
    gender: "M",
    image:
      "https://huskerlandbulldogs.com/wp-content/uploads/2019/03/English-Bulldogs-Exercising.jpg",
    likes: [],
    user: user2,
  });

  const dog5 = new Dog({
    breed: "Maltese",
    name: "Priscilla",
    age: 2,
    about:
      "A young world traveler - I have already been to over 8 countries with my owner. Interested in living my life trying new foods, meeting new friends, and traveling ✈️. If you are down for an adventure, we will be a good match!",
    gender: "F",
    image:
      "https://www.thesprucepets.com/thmb/LC4qnr6bYaV0dfQID7gfRsDbp4g=/3800x0/filters:no_upscale():strip_icc()/Malteseportrait-GettyImages-153520182-1eb5302d0f184d02b509fcf05348d64e.jpg",
    likes: [],
    user: user3,
  });

  const dog6 = new Dog({
    breed: "Bullmastiff",
    name: "Hank",
    age: 2,
    about:
      "I'm Hank! I spend most of my time playing basketball with my owner, Coby. You will find me chillin' on the basketball court with my friends, lounging in the sun or swimming in the pool.",
    gender: "M",
    image:
      "https://eadn-wc05-111874.nxedge.io/wp-content/uploads/2020/12/Bullmastiff.jpg",
    likes: [],
    user: user3,
  });

  const dog7 = new Dog({
    breed: "Dalmatian",
    name: "Pepper",
    age: 8,
    about:
      "I'm a little spicy, hence the name, Pepper 🌶️. I spent much of my life in the theater, chasing my acting dreams and now I am retired and looking for a mate to live the rest of our lives together. BTW, you may have seen me in a few famous movies...",
    gender: "F",
    image:
      "https://cdn.shopify.com/s/files/1/1415/0728/articles/download_2.jpg?v=1627313054",
    likes: [],
    user: user3,
  });

  const dog8 = new Dog({
    breed: "Husky",
    name: "Glaciar",
    age: 6,
    about:
      "WARNINGGGG! I am a bit loud and love to show off my pipes 🎤. Would love a singing partner!! I am an energetic, snow-loving, adventurous guy who wants an equal match to enjoy life with.",
    gender: "M",
    image:
      "https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1685787498.877709/fun-facts-about-siberian-huskies-1.png",
    likes: [],
    user: user4,
  });

  const dog9 = new Dog({
    breed: "German Shepherd",
    name: "Ben",
    age: 8,
    about:
      "My owner say's I am the best protector. I will guard you from cats! I take good care of myself, at the groomer twice a month to make sure I always look good. But honestly, the car rides there and back are the best part!",
    gender: "M",
    image:
      "https://images.saymedia-content.com/.image/t_share/MTc0MDcyMTY0MDU4NjcwNjU4/german-shepherd-height-and-weight.jpg",
    likes: [],
    user: user4,
  });

  const dog10 = new Dog({
    breed: "Russian Toy",
    name: "Greece",
    age: 7,
    about:
      "You guessed it - my owner is from Greece 🇬🇷. I was actually originally born in Greece, and moved to NYC when I was a puppy. I now spend my day's in Astoria, where I still get the taste of Greek culture. I'd love to take you out to the local restaurants!",
    gender: "M",
    image:
      "https://media.npr.org/assets/img/2022/11/23/russian-toy-2-002--059b8a825dac13f92234d65777e6b29b0914e92f-s1100-c50.jpg",
    likes: [],
    user: user4,
  });

  const dog11 = new Dog({
    breed: "Samoyed",
    name: "Winter",
    age: 9,
    about:
      "Hey there! I'm the adventurous spirit you've been waiting for! Fearless and outgoing, I embrace every opportunity to meet new friends. My tail's always wagging to spread happiness, and I'll lead you on exciting journeys, making unforgettable memories.",
    gender: "F",
    image: "https://cdn.britannica.com/86/235886-050-2A7CC649/Samoyed-dog.jpg",
    likes: [],
    user: user5,
  });

  const dog12 = new Dog({
    breed: "Newfoundland",
    name: "Jasper",
    age: 2,
    about:
      "I'm a brainy pup with a love for learning. Training and tricks are my passion, and I'll impress you with my cleverness. Puzzles are a breeze for me, and I crave mental stimulation. Together, we'll conquer challenges and become an unbeatable team, especially for treat puzzles!",
    gender: "M",
    image:
      "https://images.fineartamerica.com/images/artworkimages/medium/3/beautiful-fluffy-faced-sweet-brown-newfoundland-dog-dejavu-designs.jpg",
    likes: [],
    user: user5,
  });

  const dog13 = new Dog({
    breed: "Dachshund",
    name: "Hot Dog",
    age: 4,
    about:
      "I am Hot Dog, you'll find me being a couch potato, eating potato chips. My favorite shows are cooking shows and breaking bad. If you are a good cook - that is a major plus for me! I promise I'd eat all of your food to the last drop. What is your fav food?",
    gender: "M",
    image:
      "https://youdidwhatwithyourweiner.com/wp-content/uploads/2021/04/Depositphotos_198357474_Roverus-800x534.jpg",
    likes: [],
    user: user6,
  });

  const dog14 = new Dog({
    breed: "Schnauzer",
    name: "Jan",
    age: 4,
    about:
      "My mission in life is to be your ultimate cuddle buddy! I love being a lap dog, melting your heart with my warm snuggles and gentle eyes. Lazy days are my forte, and I'll be your loyal companion, making every moment more relaxing.",
    gender: "M",
    image:
      "https://www.thesprucepets.com/thmb/mImr5tbxxGPir437MI7jnkhxNro=/2121x0/filters:no_upscale():strip_icc()/MiniatureSchnauzerpuppy-GettyImages-1012208262-b1995bca76a5488fa3feec8b10871ddb.jpg",
    likes: [],
    user: user6,
  });

  const dog15 = new Dog({
    breed: "Mutt",
    name: "Soup",
    age: 7,
    about:
      "I was found roaming the streets of Brooklyn, and became the neighborhood dog till my owner, Melissa took me in as one of her own. Now I have walks everyday, go on adventures with my brothers, and hanging with my owner's friends dogs. I have so many friends so we will always have things to do.",
    gender: "F",
    image:
      "https://dogtime.com/wp-content/uploads/sites/12/gallery/mutt-dog-breed-pictures/face-1.jpg",
    likes: [],
    user: user6,
  });

  const dog16 = new Dog({
    breed: "Border Collie",
    name: "Donna",
    age: 9,
    about:
      "An old soul with a young heart. Music is the way to my soul. I love jazz, and even took it upon myself to come with my owner to her saxaphone lessons. I would love to hear what your favorite composer is.",
    gender: "F",
    image:
      "https://animalcorner.org/wp-content/uploads/2020/08/Border-Collie-2.jpg",
    likes: [],
    user: user7,
  });

  const dog17 = new Dog({
    breed: "Chihuahua",
    name: "Salsa",
    age: 11,
    about:
      "Looking to live the rest of my life by the lake. Looking for a mate to move with my owner and I to upstate, NY. We spent most of the summers by the lakehouse, rowboating, hanging out by the fire, and watching movies and BBQing! Would love to meet someone down to earth to share this life with.",
    gender: "F",
    image:
      "https://as2.ftcdn.net/v2/jpg/01/78/14/09/1000_F_178140976_uji9yyR68T9fV5uAHLCpyY15uijODUFy.jpg",
    likes: [],
    user: user7,
  });

  const dog18 = new Dog({
    breed: "Havanese",
    name: "Max",
    age: 1,
    about:
      "I am new to the area and would like someone to show me their favorite spots. I love Mexican food, long walks in the park, ice cream 🍦 by the water, and playing fetch.",
    gender: "M",
    image:
      "https://www.rover.com/blog/wp-content/uploads/iStock-520942487-min-e1649971013544.jpg",
    likes: [],
    user: user7,
  });

  const dog19 = new Dog({
    breed: "Great Dane",
    name: "Jack",
    age: 3,
    about:
      "I am a performer at heart. I love to make my owner's laugh and I am super playful at heart. I am looking for a mate who is just as goofy as I am. Maybe we can do tricks together for our owners!",
    gender: "M",
    image:
      "https://images2.minutemediacdn.com/image/upload/c_crop,w_5064,h_2848,x_0,y_352/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01g6rhtp7xh64x24j0g6.jpg",
    likes: [],
    user: user8,
  });

  await dog1.save();
  await dog2.save();
  await dog3.save();
  await dog4.save();
  await dog5.save();
  await dog6.save();
  await dog7.save();
  await dog8.save();
  await dog9.save();
  await dog10.save();
  await dog11.save();
  await dog12.save();
  await dog13.save();
  await dog14.save();
  await dog15.save();
  await dog16.save();
  await dog17.save();
  await dog18.save();
  await dog19.save();

  db.close();
};

insertData();
