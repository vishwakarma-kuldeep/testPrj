import { Injectable } from '@nestjs/common';

@Injectable()
export class RandomJokesService {
    // call the  https://api.chucknorris.io/jokes/random  to generate random jokes

    async getJokes() {
        try {
            let jokes = await fetch('https://api.chucknorris.io/jokes/random',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            jokes = await jokes.json();
            // console.log(jokes);
            return  jokes;
        } catch (error) {
            throw error;
        }
    }
}
