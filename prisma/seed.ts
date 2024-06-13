import { PrismaClient } from '@prisma/client';
import {faker} from '@faker-js/faker';
const db = new PrismaClient();


type Posts = {
    title: string;
    content: string;
    published: boolean;
    author: string;
}
type Inboxs = {
    email: string;
    message: string;
    name: string;
}

export const PostFactory  = (): Posts => {

    return {
        title: faker.lorem.words(),
        content: faker.lorem.paragraphs() + faker.lorem.paragraphs(),
        published: true,
        author: faker.internet.userName()
    }
}
export const InboxFactory = (): Inboxs => {
    return {
        email: faker.internet.email(),
        message: faker.lorem.paragraphs(),
        name: faker.internet.userName()
    }
}

export const dataFactory: Posts[] = faker.helpers.multiple(PostFactory,{count: 20});
export const dataInboxFactory: Inboxs[] = faker.helpers.multiple(InboxFactory,{count: 10});


const seed = async () => {


    await Promise.all(
        dataFactory.map(post => {
            return db.post.create({
                data: post
            });
        
        })
    );

    await Promise.all(
        dataInboxFactory.map(inbox => {
            return db.inbox.create({
                data: inbox
            });
        
        })
    );

};

(async () => {
    await seed();
    await db.$disconnect();
})();