import db from "../db/connection.js";
import Dog from "../models/Dog.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: "Syd",
    email: "syd@email.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssword55!", 11),
  });

  const user2 = new User({
    username: "Adam",
    email: "adam@email.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssword55!", 11),
  });

  const user3 = new User({
    username: "Coby",
    email: "Coby@email.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssword55!", 11),
  });

  const user4 = new User({
    username: "Pavlos",
    email: "Pavlos@email.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssword55!", 11),
  });

  await user1.save();
  await user2.save();
  await user3.save();
  await user4.save();

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

  db.close();
};

insertData();