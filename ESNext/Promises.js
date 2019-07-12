function speak_after_of(sec, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, sec * 1000)
    })
}

speak_after_of(2, "sdasdfsdf")
    .then(frase => frase.concat("!!!"))
    .then(otherfrase => console.log(otherfrase))