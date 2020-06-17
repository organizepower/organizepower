const { addUser, addMovement, linkUserMovement } = require('./methods');
const { genPassword } = require('../auth/passwordUtils');

/*
To create and seed a new database:

In mysql shell:
drop database op;
create database op;

Then in node terminal:
node server/db/index.js
node server/db/seedData.js
*/

const seedUsers = [
  {
    // id: 1,
    username: 'krazyKris',
    password: 'hehe',
    firstName: 'Kris',
    lastName: 'Mason',
    location: 'New Orleans, LA',
    email: 'kris@gmail.com',
    phoneNumber: '111-123-4567',
    imageUrl: 'https://miro.medium.com/max/3150/0*DvXPY79aqDQoMRvu.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
  },
  {
    // id: 2,
    username: 'craftyClayton',
    password: 'hoho',
    firstName: 'Clayton',
    lastName: 'Christenson',
    location: 'Dallas, TX',
    email: 'clayton@gmail.com',
    phoneNumber: '222-123-4567',
    imageUrl: 'https://sloanreview.mit.edu/wp-content/uploads/2020/02/MAG-Christensen-1290x860.jpg',
    bio: 'bio for craftyClayton',
  },
  {
    // id: 3,
    username: 'niftyNeisha',
    password: 'haha',
    firstName: 'Neisha',
    lastName: 'Rose',
    location: 'New York, NY',
    email: 'neisha@gmail.com',
    phoneNumber: '333-123-4567',
    imageUrl: 'https://secure.img1-fg.wfcdn.com/im/00553075/compr-r85/7108/71085402/roses-floral-arrangement-in-vase.jpg',
    bio: 'bio for niftyNeisha',
  },
  {
    // id: 4,
    username: 'wilyWill',
    password: 'hihi',
    firstName: 'Will',
    lastName: 'Preble',
    location: 'Los Angeles, CA',
    email: 'will@wpreble1.com',
    phoneNumber: '444-123-4567',
    imageUrl: 'https://athletics.bethel.edu/images/2015/11/12/i_ZB4v5RL_X3.jpg?width=300',
    bio: 'bio for wilyWill',
  },
];

const seedMovements = [
  {
    // id: 1,
    imageUrl: 'https://assets.change.org/photos/0/la/lt/mylaLTYqhScqWHI-800x450-noPad.jpg?1590516227',
    name: 'Justice for George Floyd',
    location: 'Minneapolis, MN',
    description: `
      George Floyd was murdered by a Minneapolis police officer.

      George was handcuffed and restrained and being completely cooperative when this all went down. The officer put his knee on George’s neck choking him for minutes on minutes while George screamed that he could not breathe. Bystanders beg for the police officer to take his knee off George’s neck, but the officer didn’t listen and continued to choke him.

      Not that it would matter at all, but George was not even wanted for a violent crime. A grocery store that he was signing a bad check. 

      We are trying to reach the attention of Mayor Jacob Frey and DA Mike Freeman to beg to have the officers involved in this disgusting situation fired and for charges to be filed immediately.

      Please help us get justice for George and his family!
    `,
    followers: Math.floor(Math.random() * 100000),
    emailCount: Math.floor(Math.random() * 100000),
    textCount: Math.floor(Math.random() * 100000),
    polFirstName: 'Jacob',
    polLastName: 'Frey',
    polPosition: 'Mayor of Minneapolis',
    polEmail: '',
    polPhoneNumber: '612-673-2100',
    polImageUrl: 'https://kstp.com/kstpImages/repository/2020-06/800MayorJacobFreyKSTP.jpg',
  },
  {
    // id: 2,
    imageUrl: 'https://assets.change.org/photos/5/tg/gk/uNtGGkZoxgRnuuz-800x450-noPad.jpg?1589086374',
    name: 'Justice for Breonna Taylor',
    location: 'Louisville, KY',
    description: `
      Breonna Taylor was an award-winning EMT and model citizen. She loved her family and community. She worked at two hospitals as an essential worker during the pandemic.

      One month ago, a division of the Louisville Police Department performed an illegal, unannounced drug raid on her home. Not a single officer announced themselves before ramming down her door and firing 22 shots, shooting Breonna 8 times, killing her. 

      Not only were the police at the WRONG HOUSE, but the man they were looking for had already been arrested earlier that day.
    `,
    followers: Math.floor(Math.random() * 100000),
    emailCount: Math.floor(Math.random() * 100000),
    textCount: Math.floor(Math.random() * 100000),
    polFirstName: 'Greg',
    polLastName: 'Fischer',
    polPosition: 'Mayor of Louisville',
    polEmail: 'Greg.Fischer@louisvilleky.gov',
    polPhoneNumber: '502.574.2003',
    polImageUrl: 'https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/Greg_Fischer.jpg',
  },
  {
    // id: 3,
    imageUrl: 'https://assets.change.org/photos/0/be/bh/PxBebHLEVjesKqr-800x450-noPad.jpg?1585108503',
    name: 'Hazard pay for all USPS EMPLOYEES!!',
    location: 'Washington D.C.',
    description: `
      As we get deeper and deeper into this Coronavirus epidemic postal employees are being forced to work and do overtime upwards of 12 hours a day. As of this present time there have been Upwards of more than 40 confirmed cases of coronavirus with-in the United States Postal Service. From dealing with the day-to-day struggles of rain, sleet snow, hail or no AC in postal vehicles limited heating in postal vehicles no innovations in carriers delivery methods no innovations in protection clothing or any other areas of the post office.

      Megan Brennan USPS CEO hasn’t sent any supplies such as had sanitizer or mask for employees protection, she made a very vague statement which basically read her employees should follow CDC guidelines. Blood, sweat, and tears postal employees carrier this company on their backs day in and day out at the expense of time with our families, wear and tear on our bodies, mental and emotional abuse from USPS management.
    `,
    followers: Math.floor(Math.random() * 100000),
    emailCount: Math.floor(Math.random() * 100000),
    textCount: Math.floor(Math.random() * 100000),
    // polFirstName: '',
    // polLastName: '',
    // polPosition: '',
    // polEmail: '',
    // polPhoneNumber: '',
    // polImageUrl: '',
  },
  {
    // id: 4,
    imageUrl: 'https://assets.change.org/photos/6/cs/xl/ckcSXLaKgxsPYhJ-800x450-noPad.jpg?1584468082',
    name: 'Save America\'s Restaurants',
    location: 'Washington D.C.',
    description: `
      Imagine your cities and states without their most beloved restaurants and bars—from cherished third-generation mom-and-pops to cutting-edge fine-dining spots that bring tourists, international attention, and increased real-estate value to neighborhoods.

      It’s unimaginable, right?

      Restaurants and bars are defining and vital contributors to our communities. They are gathering places where people celebrate good times and forget their troubles in bad. Older ones are as much a part of their landscape and cities’ identity as landmark buildings, theaters, and museums. But the danger of COVID-19 means that they can no longer be that place for people. And it means that this time, we are among those in trouble.
    `,
    followers: Math.floor(Math.random() * 100000),
    emailCount: Math.floor(Math.random() * 100000),
    textCount: Math.floor(Math.random() * 100000),
    // polFirstName: '',
    // polLastName: '',
    // polPosition: '',
    // polEmail: '',
    // polPhoneNumber: '',
    // polImageUrl: '',
  },
  {
    // id: 5,
    imageUrl: 'https://assets.change.org/photos/9/ar/ba/GbaRbaYXNoBxLLO-800x450-noPad.jpg?1585075667',
    name: 'Remove barriers to fixing ventilators',
    location: 'Washington D.C.',
    description: `
      We are confronting a hard reality: U.S. hospitals do not have enough ventilators to meet the spike in respiratory failure that the novel coronavirus is projected to create.

      As ventilators are pressed into round-the-clock use, repair and maintenance issues will increase. While some ventilator manufacturers provide the service information that biomedical technicians need, other manufacturers make it hard to access manuals, read error logs or run diagnostic tests. We need to remove those barriers now.

      Hospitals in the United States don’t possess enough ventilators to meet the demand that COVID-19 is expected to create -- a reality that could have dire consequences for patients who will need these devices to breathe.
    `,
    followers: Math.floor(Math.random() * 100000),
    emailCount: Math.floor(Math.random() * 100000),
    textCount: Math.floor(Math.random() * 100000),
    // polFirstName: '',
    // polLastName: '',
    // polPosition: '',
    // polEmail: '',
    // polPhoneNumber: '',
    // polImageUrl: '',
  },
  {
    // id: 6,
    imageUrl: 'https://assets.change.org/photos/1/zm/dj/gDzMDJWVwiOqfRg-800x450-noPad.jpg?1509555562',
    name: 'Replace Confederate statues in New Orleans with statues of Louisiana hero Britney Spears',
    location: 'New Orleans, LA',
    description: `
      Before becoming one of the world's most important and influential pop legends, Britney Spears was living life in a small southern town by the name of Kentwood, Louisiana.

      Not only has Britney proven her talent, but she's proven her strength of character by not only overcoming highly publicized mental breakdown, but by continuously working towards improving herself. She's an inspiration to millions. 

      She's already earned her star on Hollywood's Walk of Fame, and now it's time for her home state to honor her with the tribute that she deserves.
    `,
    followers: Math.floor(Math.random() * 100000),
    emailCount: Math.floor(Math.random() * 100000),
    textCount: Math.floor(Math.random() * 100000),
    polFirstName: 'LaToya',
    polLastName: 'Cantrell',
    polPosition: 'Mayor of New Orleans',
    polEmail: 'mayor@nola.gov',
    polPhoneNumber: '(504) 658-4900',
    polImageUrl: 'https://www.nola.gov/getmedia/79d7ef00-820b-4ee5-914b-73f4bf13595a/new-orleans-mayor-latoya-cantrell/?width=275&height=412',
  },
  {
    // id: 7,
    imageUrl: 'https://assets.change.org/photos/2/wg/jc/ZfWGjcUiTuHyvPZ-800x450-noPad.jpg?1545172516',
    name: 'New York: Legalize recreational marijuana',
    location: 'New York, NY',
    description: `
      Ten states (including Massachusetts, right next door) and Washington, D.C. have all legalized adult use of recreational marijuana. New York is lagging behind.

      Legalization would let the state better control licensing, ensure quality control and therefore consumer protection, and they could set age and quantity restrictions. Plus, the state would get millions in tax revenue every single year.

      Around 17,500 people are arrested each year on marijuana possession charges in New York City alone. Research has found that there is no good evidence that marijuana arrests in New York City are associated with reductions in crime.
    `,
    followers: Math.floor(Math.random() * 100000),
    emailCount: Math.floor(Math.random() * 100000),
    textCount: Math.floor(Math.random() * 100000),
    polFirstName: 'Andrew',
    polLastName: 'Cuomo',
    polPosition: 'Governor of California',
    polEmail: 'gov.cuomo@chamber.state.ny.us',
    polPhoneNumber: '1-518-474-8390',
    polImageUrl: 'https://media.vanityfair.com/photos/5edfbdaa5e67e69a28c8d447/master/w_2560%2Cc_limit/AndrewCuomo-2020-shutterstock_editorial_10673668v.jpg',
  },
  {
    // id: 8,
    imageUrl: 'https://assets.change.org/photos/5/le/ig/PKleiGAkPFKPIjM-800x450-noPad.jpg?1581279507',
    name: 'California: Insulin For All',
    location: 'California',
    description: `
      I started taking insulin in 1974 when I was diagnosed with type 1 diabetes at age 11.  I started using NPH and Regular insulin that worked well in the 1970's.  Over the years, better, more effective insulin came to market.  Unfortunately, they also cost more.  Last year, I lost my health insurance for a short time that covered my Humalog insulin that I used in my insulin pump.  I resorted back to using NPH and Regular for a while, but I could not use it in my insulin pump.  Humalog cost retail about $200.00 a bottle that I could not afford.  I used NPH and Regular for a while.

      Using older NPH and Regular insulin from the seventies is like listening to music on a scratchy vinyl record album.  You can hear the music, but it is not as good as listening to music on your MP3 player.

      Insulin isn’t just a drug. It’s the difference between life and death for millions of people with diabetes – and it’s something they will need every day for the rest of their lives.
    `,
    followers: Math.floor(Math.random() * 100000),
    emailCount: Math.floor(Math.random() * 100000),
    textCount: Math.floor(Math.random() * 100000),
    polFirstName: 'Gavin',
    polLastName: 'Newsom',
    polPosition: 'Governor of California',
    polEmail: 'StateInfo@state.ca.gov',
    polPhoneNumber: '(916) 445-2841',
    polImageUrl: 'https://arizent.brightspotcdn.com/f2/07/c1ce958c43cbbf6a2b5731730f79/newsom-gavin-bl-100319.jpg',
  },
  {
    // id: 9,
    imageUrl: 'https://assets.change.org/photos/6/lg/xw/eilGxWIrWsDxQdD-800x450-noPad.jpg?1591393173',
    name: 'End Massachusetts Cash Bail',
    location: 'Massachusetts',
    description: `
      There are over 540,000 Americans, almost half of whom are black, who are currently in jail because they cannot afford bail. This is a legal punishment for poverty and is a practice that has been used to enact modern day legal racial discrimination. It has been repeatedly demonstrated that Black Americans are assigned higher bail amounts and are vastly over represented in the pretrial prison population. Not only does this practice have enormous negative effects on many of America’s most vulnerable communities, the system of cash bail is unconstitutional. The 5th and 14th amendment guarantees that no person shall be deprived of “life, liberty, or property, without due process of law,” and the 8th amendment states that “excessive bail shall not be required.” It is clear therefore that cash bail is unjust and unconstitutional. Not only that, but in Massachusetts, it has been found to be ineffective.

      A commission to examine cash bail reform was established in Massachusetts in 2019 to examine the role and effectiveness of cash bail in the criminal justice system. According to the commission, the role of cash bail is “to ensure [the defendants] appearance at trial. In 2018, 12.3% of people who were released without bail failed to appear in court, and 14.3% of people released on bail failed to appear for their court date. So people who were released on cash bail, a system supposedly designed to ensure appearance in court, were actually less likely to appear in court. It is clear that cash bail is racist, unconstitutional, and ineffective and therefore should be eliminated entirely.
    `,
    followers: Math.floor(Math.random() * 100000),
    emailCount: Math.floor(Math.random() * 100000),
    textCount: Math.floor(Math.random() * 100000),
    polFirstName: 'Charlie',
    polLastName: 'Baker',
    polPosition: 'Governor of Massachusetts',
    polEmail: 'cis@sec.state.ma.us',
    polPhoneNumber: '(617) 725-4005',
    polImageUrl: 'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2014/09/baker-1.jpg',
  },
];

Promise.all(seedUsers.map(user => {
  const saltHash = genPassword(user.password);
  const { salt, hash } = saltHash;
  const encryptedUser = user;
  delete encryptedUser.password;
  encryptedUser.salt = salt;
  encryptedUser.hash = hash;
  return addUser(encryptedUser);
}))
  .then(() => {
    Promise.all(seedMovements.map(movement => {
      let userId = Math.round(Math.random() * seedUsers.length);
      if (userId === 0) {
        userId = 1;
      }
      return addMovement(movement, userId)
        .then(createdMovement => {
          linkUserMovement(userId, createdMovement.id);
        });
    }));
  })
  .then(() => {
    linkUserMovement(1, 1);
    linkUserMovement(1, 2);
    linkUserMovement(1, 3);
    linkUserMovement(2, 3);
    linkUserMovement(2, 4);
    linkUserMovement(2, 5);
    linkUserMovement(3, 4);
    linkUserMovement(3, 5);
    linkUserMovement(3, 6);
    linkUserMovement(4, 5);
    linkUserMovement(4, 6);
    linkUserMovement(4, 7);
    linkUserMovement(4, 8);
    linkUserMovement(4, 9);
  });
