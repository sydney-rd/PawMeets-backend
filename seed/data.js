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

  await user1.save();
  await user2.save();
  await user3.save();
  await user4.save();
  await user5.save();
  await user6.save();
  await user7.save();

  const dog1 = new Dog({
    breed: "Pitbull",
    name: "Queso",
    age: 4,
    about:
      "Happy pittie who loves fast car-rides who is looking for a long-term mate",
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
    about: "I'll do tricks for treats, and I have the sofest fur for cuddling",
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
      "Most people spell my name as 'Shitzu' but it's 'Shih Tzu'... yappy, cute and seeking a mate to calm me down!",
    gender: "F",
    image:
      "https://i.guim.co.uk/img/media/f5d489803f880797e751e74374aef019ac96d09a/0_95_4200_2520/master/4200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=3963f8b3fca619e904ccb686150d2fa0",
    likes: [],
    user: user2,
  });

  const dog4 = new Dog({
    breed: "Bulldog",
    name: "Concrete",
    age: 5,
    about: "I like to play ruff. Gentle at heart",
    gender: "M",
    image:
      "https://huskerlandbulldogs.com/wp-content/uploads/2019/03/English-Bulldogs-Exercising.jpg",
    likes: [],
    user: user2,
  });

  const dog5 = new Dog({
    breed: "Maltese",
    name: "Lucy",
    age: 1,
    about: "World traveler. Been to over 10 countries with my owner.",
    gender: "F",
    image:
      "https://i.pinimg.com/736x/e1/f6/84/e1f684dc4df142a20738f85d87f7e32a.jpg",
    likes: [],
    user: user3,
  });

  const dog6 = new Dog({
    breed: "Bullmastiff",
    name: "Pippy",
    age: 2,
    about: "You'll see me on the b-ball court chillin in the sun",
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
    about: "You may have seen me in a few movies...",
    gender: "F",
    image: "https://i.redd.it/ksebwnhmk1q41.jpg",
    likes: [],
    user: user3,
  });

  const dog8 = new Dog({
    breed: "Husky",
    name: "Glaciar",
    age: 6,
    about: "LOVE THE WINTER! I also love to SING!",
    gender: "M",
    image:
      "https://wpcdn.zenger.news/wp-content/uploads/2021/07/09112508/feat_fcf292a5-c2ad-4dbc-89ce-7f9b6f718168.jpg",
    likes: [],
    user: user4,
  });

  const dog9 = new Dog({
    breed: "German Shepherd",
    name: "Bentley",
    age: 5,
    about: "I will guard you from cats!",
    gender: "M",
    image: "https://a-z-animals.com/media/2022/01/german-shepherd.jpg",
    likes: [],
    user: user4,
  });

  const dog10 = new Dog({
    breed: "Russian Toy",
    name: "Greece",
    age: 7,
    about: "I like to travel",
    gender: "M",
    image:
      "https://media.npr.org/assets/img/2022/11/23/russian-toy-2-002--059b8a825dac13f92234d65777e6b29b0914e92f-s1100-c50.jpg",
    likes: [],
    user: user4,
  });

  const dog11 = new Dog({
    breed: "Samoyed",
    name: "Wynter",
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
      "Woof! I'm a brainy pup with a love for learning. Training and tricks are my passion, and I'll impress you with my cleverness. Puzzles are a breeze for me, and I crave mental stimulation. Together, we'll conquer challenges and become an unbeatable team!",
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
      "My mission in life is to be your ultimate cuddle buddy! I love being a lap dog, melting your heart with my warm snuggles and gentle eyes. Lazy days are my forte, and I'll be your loyal companion, making every moment more relaxing.",
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

  const dog16 = new Dog({
    breed: "Border Collie",
    name: "Wispy",
    age: 9,
    about:
      "My mission in life is to be your ultimate cuddle buddy! I love being a lap dog, melting your heart with my warm snuggles and gentle eyes. Lazy days are my forte, and I'll be your loyal companion, making every moment more relaxing.",
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
      "My mission in life is to be your ultimate cuddle buddy! I love being a lap dog, melting your heart with my warm snuggles and gentle eyes. Lazy days are my forte, and I'll be your loyal companion, making every moment more relaxing.",
    gender: "F",
    image:
      "https://as2.ftcdn.net/v2/jpg/01/78/14/09/1000_F_178140976_uji9yyR68T9fV5uAHLCpyY15uijODUFy.jpg",
    likes: [],
    user: user7,
  });

  const dog18 = new Dog({
    breed: "Havanese",
    name: "Waffles",
    age: 1,
    about:
      "My mission in life is to be your ultimate cuddle buddy! I love being a lap dog, melting your heart with my warm snuggles and gentle eyes. Lazy days are my forte, and I'll be your loyal companion, making every moment more relaxing.",
    gender: "F",
    image:
      "https://www.rover.com/blog/wp-content/uploads/iStock-520942487-min-e1649971013544.jpg",
    likes: [],
    user: user7,
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

  db.close();
};

insertData();
