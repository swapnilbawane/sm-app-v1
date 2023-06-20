import { v4 as uuid } from 'uuid'
import { formatDate } from '../utils/authUtils'

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

// export const posts = [
//     {
//         _id: uuid(),
//         content:
//             `Sunday morning pakodas! Aha! Love it. The cosy weather, the chai and my favorite book with pakodas! What a feeling :)`,
//         likes: {
//             likeCount: 0,
//             likedBy: [],
//             dislikedBy: [],
//         },
//         username: 'adarshbalika',
//         createdAt: formatDate(),
//         updatedAt: formatDate(),
//     },
//     {
//       _id: uuid(),
//       content:
//           `Aj kal log yaha par rant karne aate hai, mai toh keval achhe cheeze dekhne aata hu :) Life sorted hoti hai, apna feed apni choice!`,
//       likes: {
//           likeCount: 0,
//           likedBy: [],
//           dislikedBy: [],
//       },
//       username: 'adarshbalika',
//       createdAt: formatDate(),
//       updatedAt: formatDate(),
//   },
//   {
//     _id: uuid(),
//     content:
//         `Kaam aisa karo ki chaar log tumhari waah waah kare aur salary kitna loge aur ye puche :D`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'adarshbalika',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `Jeene ke hai chaar din, baaki ke hai? baaki ke din bhi hai bhai. Ye lyrics wala bhi na.. :D`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'adarshbalika',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `What a match! The way our players are now working hard is commendable! Had a memorable time of my life at Chinnaswamy Stadium! Dhoni rocks!`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'adarshbalika',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” - Neil Gaiman, Coraline`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'shubhamsoni',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `“You've gotta dance like there's nobody watching,
//         Love like you'll never be hurt,
//         Sing like there's nobody listening,
//         And live like it's heaven on earth.”
//         ― William W. Purkey`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'shubhamsoni',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `“Do not read, as children do, to amuse yourself, or like the ambitious, for the purpose of instruction. No, read in order to live.”
//         ― Gustave Flaubert`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'shubhamsoni',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `“Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.”
//         ― Roy T. Bennett, The Light in the Heart`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'shubhamsoni',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `“If you remember me, then I don't care if everyone else forgets.”
//         ― Haruki Murakami, Kafka on the Shore`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'shubhamsoni',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”
//         ― Albert Einstein`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'alberteinstein',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle." - Albert Einstein`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'alberteinstein',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”
//         ― Albert Einstein`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'alberteinstein',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `“If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.”
//         ― Albert Einstein`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'alberteinstein',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `“The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.”
//         ― Albert Einstein`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'alberteinstein',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `"I would like to tell the young men and women before me not to lose hope and courage. Success can only come to you by courageous devotion to the task lying in front of you." - Sir C V Raman`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'sircvraman',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `"The essence of science is independent thinking, hard work, and not equipment. When I got my Nobel Prize, I had spent hardly 200 rupees on my equipment." - Sir C V Raman`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'sircvraman',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `"We must teach science in the mother tongue. Otherwise, science will become a highbrow activity. It will not be an activity in which all people can participate." - Sir C V Raman`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'sircvraman',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `"In the history of science, we often find that the study of some natural phenomenon has been the starting point in the development of a new branch of knowledge." - Sir C V Raman`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'sircvraman',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `"I strongly believe that fundamental science cannot be driven by instructional, industrial, governmental or military pressures. This was the reason why I decided, as far as possible, not to accept money from the government." - Sir C V Raman`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'sircvraman',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `If you want to do something, achieve something, you can't be thinking all the time of what you don't have.” - Kapil Dev`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'cricketquotes',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `“Some folks will say 'Oh, Winning ain't all!” But I know it is all. At the end of the day no one looks at the loser. So that is why we play to win.” - Vivian Richards`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'cricketquotes',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `The joy of doing well as a batsman for your country is much more than that little joy of going for a party and enjoying music. It is a completely different high, and I get high by the performances. That's what I enjoy now.” - Virat Kohli`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'cricketquotes',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `“Finishing is one of the most difficult things to do in cricket. A player can't be a finisher in just 6 months or one year. You have to be used to that responsibility, keeping on doing what is required from you over a period of time.” - M S Dhoni`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'cricketquotes',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// },
// {
//     _id: uuid(),
//     content:
//         `“I set great store in certain qualities which I believe to be essential in addition to skill. They are that the person conducts his or her life with dignity, with integrity, courage, and perhaps most of all, with modesty.” - Don Bradman`,
//     likes: {
//         likeCount: 0,
//         likedBy: [],
//         dislikedBy: [],
//     },
//     username: 'cricketquotes',
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
// }
// ]

export const posts = [
    {
        _id: uuid(),
        content: `Sunday morning pakodas! Aha! Love it. The cosy weather, the chai and my favorite book with pakodas! What a feeling :)`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'adarshbalika',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },

    {
        _id: uuid(),
        content: `“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” - Neil Gaiman, Coraline`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'shubhamsoni',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },

    {
        _id: uuid(),
        content: `"I would like to tell the young men and women before me not to lose hope and courage. Success can only come to you by courageous devotion to the task lying in front of you." - Sir C V Raman`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'sircvraman',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },

    {
        _id: uuid(),
        content: `Aj kal log yaha par rant karne aate hai, mai toh keval achhe cheeze dekhne aata hu :) Life sorted hoti hai, apna feed apni choice!`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'adarshbalika',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },

    {
        _id: uuid(),
        content: `If you want to do something, achieve something, you can't be thinking all the time of what you don't have.” - Kapil Dev`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'cricketquotes',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: `"The essence of science is independent thinking, hard work, and not equipment. When I got my Nobel Prize, I had spent hardly 200 rupees on my equipment." - Sir C V Raman`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'sircvraman',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: `"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle." - Albert Einstein`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'alberteinstein',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: `"We must teach science in the mother tongue. Otherwise, science will become a highbrow activity. It will not be an activity in which all people can participate." - Sir C V Raman`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'sircvraman',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: `“You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.”
        ― William W. Purkey`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'shubhamsoni',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: `“Some folks will say 'Oh, Winning ain't all!” But I know it is all. At the end of the day no one looks at the loser. So that is why we play to win.” - Vivian Richards`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'cricketquotes',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: `"In the history of science, we often find that the study of some natural phenomenon has been the starting point in the development of a new branch of knowledge." - Sir C V Raman`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'sircvraman',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: `“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”
        ― Albert Einstein`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'alberteinstein',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: `The joy of doing well as a batsman for your country is much more than that little joy of going for a party and enjoying music. It is a completely different high, and I get high by the performances. That's what I enjoy now.” - Virat Kohli`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'cricketquotes',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: `"I strongly believe that fundamental science cannot be driven by instructional, industrial, governmental or military pressures. This was the reason why I decided, as far as possible, not to accept money from the government." - Sir C V Raman`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'sircvraman',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: `“Finishing is one of the most difficult things to do in cricket. A player can't be a finisher in just 6 months or one year. You have to be used to that responsibility, keeping on doing what is required from you over a period of time.” - M S Dhoni`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'cricketquotes',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: `“If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.”
        ― Albert Einstein`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'alberteinstein',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: `“I set great store in certain qualities which I believe to be essential in addition to skill. They are that the person conducts his or her life with dignity, with integrity, courage, and perhaps most of all, with modesty.” - Don Bradman`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'cricketquotes',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },

    {
        _id: uuid(),
        content: `“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”
        ― Albert Einstein`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'alberteinstein',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },

    {
        _id: uuid(),
        content: `“Do not read, as children do, to amuse yourself, or like the ambitious, for the purpose of instruction. No, read in order to live.”
        ― Gustave Flaubert`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'shubhamsoni',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },

    {
        _id: uuid(),
        content: `Kaam aisa karo ki chaar log tumhari waah waah kare aur salary kitna loge aur ye puche :D`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'adarshbalika',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },

    {
        _id: uuid(),
        content: `“Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.”
        ― Roy T. Bennett, The Light in the Heart`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'shubhamsoni',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },

    {
        _id: uuid(),
        content: `Jeene ke hai chaar din, baaki ke hai? baaki ke din bhi hai bhai. Ye lyrics wala bhi na.. :D`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'adarshbalika',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },

    {
        _id: uuid(),
        content: `“The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.”
        ― Albert Einstein`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'alberteinstein',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },

    {
        _id: uuid(),
        content: `What a match! The way our players are now working hard is commendable! Had a memorable time of my life at Chinnaswamy Stadium! Dhoni rocks!`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'adarshbalika',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },

    {
        _id: uuid(),
        content: `“If you remember me, then I don't care if everyone else forgets.”
        ― Haruki Murakami, Kafka on the Shore`,
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: 'shubhamsoni',
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
]
