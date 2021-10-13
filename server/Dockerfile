FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . ./

ENV MONGO_URL= mongodb+srv://Ananya:Kinetic01@zomato-master.huo2d.mongodb.net/zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID = 1029715780966-0ic757frqadpc0dfigjc51gpa0rj8km0.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET = gqO9nOlZcctxsgiWieX0C0td
ENV AWS_S3_ACCESS_KEY = AKIAQCFYJMRBT6RQFRNP
ENV AWS_S3_SECRET_KEY = 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
ENV RZR_PAY_ID= rzp_test_37UTrgBcVvV7JP
ENV RZR_PAY_SECRET= A2C9osqoa1grvS02l1QksENh

CMD["npm", "run", "start"]