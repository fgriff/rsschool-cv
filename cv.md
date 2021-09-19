# Vyacheslav Rozov

## Contact information:

**Telegram:** anglirum

**Discord:** SR#5553

**Email:** anglirum@gmail.com

**GitHub:** https://github.com/fgriff

## About me:

I got into web programming in 2017. At first it was a hobby, but now I strive to turn it into my work. My goal is to become a full-stack developer

## Skills:

* HTML
* CSS
* JavaScript
* TypeScript
* SASS/SCSS/LESS
* BEM methodology
* Git

## Code example:

```
static async addWinner(winCar: WinnerCar): Promise<void> {
  const winner = await getWinner(winCar.id);

  if (!winner.id) {
    await createWinner({ id: winCar.id, wins: 1, time: winCar.time });
  } else if (winner.time > winCar.time) {
    const newWinner = {
      wins: winner.wins + 1,
      time: winCar.time,
    };

    await updateWinner(winCar.id, newWinner);
  }
}
```

## Education:

* RSSchool (JavaScript/Front-end course 2021Q1)
* Dmitry Lavrik (js course)
* Glo-academy (html/css/js course)
* Htmlacademy (html/css course)
* Rybinsk State Aviation Technological Academy. Faculty of Aircraft Engines