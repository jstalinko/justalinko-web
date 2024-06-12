import { PrismaClient } from '@prisma/client';
import {faker} from '@faker-js/faker';
const db = new PrismaClient();


const seed = async () => {


    await Promise.all(
        dataFactory.map(post => {
            return db.post.create({
                data: post
            });
        
        })
    );

};

type Posts = {
    title: string;
    content: string;
    published: boolean;
    author: string;
}

export const PostFactory  = (): Posts => {

    return {
        title: faker.lorem.words(),
        content: faker.lorem.paragraphs(),
        published: true,
        author: faker.internet.userName()
    }
}

export const dataFactory: Posts[] = faker.helpers.multiple(PostFactory,{count: 10});


(async () => {
    await seed();
    await db.$disconnect();
})();