const homeStrings = {
    intro: {
        title: "A Small but Mighty Wind",
        body: `
            Nadia Jean is a multi-instrumentalist, specializing in Saxophones 
            and Electric Wind Instrument (EWI). Her main body of work has been 
            in live musical theatre pit orchestras, but she is equally capable 
            in studio, small combos, and big bands. Her musical interests cover 
            a wide range of genres from Jazz to Electronica.`
    },
    background: {
        title: "Background",
        body1: `
            In her school years which included a `,
        body2: `
             involving the 
            recording of a solo saxophone "quartet," Nadia was awarded an International 
            Baccalaureate Diploma upon graduation from Grand Rapids City High/Middle School. 
            She currently attends Aquinas College, concentrating on music performance and 
            business administration.\n
            She has performed in the orchestra pit at `,
        body3: `
             at 
            Grand Rapids Civic Theater, Shadblow Theatre, Cornerstone University Performing Arts 
            Center, Gezon Auditorium at Calvin College, The Meijer Theater in the Grand Rapids 
            Public Museum, Ladies' Literary Club Theater, Ottawa Hills High School, and City 
            High/Middle School.`,
        linkedProject: `10th grade project`,
        linkedResume: `23 musical theatre productions`
    }
}

const resumeStrings = {
    intro: {
        body: `
            With a career of 23 musical theatre productions so far, Nadia is able to double on 
            any combination of woodwind voices as well a wide range of other sonic possibilities. 
            She commands a full array of virtual instruments on her EWI, including a complete 
            collection of extremely realistic acoustic-modeled flutes, clarinets, and double reeds. 
            Capable in any pit situation, Nadia has the unique ability to perform charts involving 
            ordinarily large instruments in very size-constrained spaces.`
    },
    instruments: {
        title: `Nadia's Instruments:`,
        saxes: `Baritone, Tenor, Alto, and Soprano Saxophones`,
        ewi: {
            title: `Akai EWI 4000s with Cantabile tablet system with:`,
            settings: [
                `SWAM Flutes (Bass Flute, Alto Flute, Flute, Piccolo)`,
                `SWAM Clarinets (Bass Clarinet, A and Bb Clarinets)`,
                `SWAM Double Reeds (Oboe,  English Horn, Bassoon, Contrabassoon)`,
                `Native Instruments Komplete (including Kontakt, Reaktor, Massive and Absynth)`,
                `Arturia V-Collection including (Synclavier, Fairlight CMI, Mini+Modular Moog, 
                    Roland JP8,  Oberheim SEM+Matrix12, Yamaha DX7, Prophet 5+VS, ARP 2600)`
            ]
        }
    },
    musicals: [
        {
            yearlocation: `August 2018 - stageGR, at Calvin College's Gezon Auditorium`,
            title: `Honk!`,
            instruments: `Reeds 1 and 2 - Alto sax and EWI (flute, piccolo, and clarinet)`,
            image: `honk.jpg`
        },
        {
            yearlocation: `July 2018 - Shadblow Theatre, at Jenison Performing Arts Center`,
            title: `The Music Man`,
            instruments: `Reed 5 - EWI (clarinet, bassoon, and bass saxophone)`,
            image: `baseimage.jpg`
        },
        {
            yearlocation: `June 2018 - Aquinas College, Art and Music Center`,
            title: `Aquinas College Jazz Camp`,
            instruments: `Office Assistant and Camp Counselor`,
            image: `baseimage.jpg`
        },
        {
            yearlocation: `April 2018 - stageGR, at Calvin College's Gezon Auditorium`,
            title: `The Hunchback of Notre Dame`,
            instruments: `Reed 1 - Soprano sax and EWI (flute, piccolo, oboe, and clarinet)`,
            image: `baseimage.jpg`
        },
        {
            yearlocation: `November 2017  - stageGR and Cornerstone University, Matthews Performing Arts Center`,
            title: `Joseph and the Amazing Technicolor Dreamcoat`,
            instruments: `Reeds 1 and Reeds 2 combined – Alto saxophone and EWI (flute and clarinet, oboe and cor anglais)`,
            image: `ejoseph.jpg`
        },
        {
            yearlocation: `​August 2017  - stageGR, at Calvin College's Gezon Auditorium`,
            title: `Willy Wonka and the Chocolate Factory`,
            instruments: `Reeds- EWI (flute, oboe, clarinet, bassoon, and sound effects)`,
            image: `wonka.jpg`
        },
        {
            yearlocation: `July 2017  - stageGR, at Calvin College's Gezon Auditorium`,
            title: `"Bring It On" the Musical`,
            instruments: `Keyboard 2`,
            image: `bio.jpg`
        },
        {
            yearlocation: `May 2017  - stageGR, at Meijer Theater in the Grand Rapids Public Museum`,
            title: `The 25th Annual Putnam County Spelling Bee`,
            instruments: `Reeds – Alto saxophone and EWI (flute, oboe, and clarinet)​`,
            image: `putnam.jpg`
        },
        {
            yearlocation: `December 2016  - stageGR, at Meijer Theater in the Grand Rapids Public Museum`,
            title: `You’re a Good Man, Charlie Brown`,
            instruments: `Reeds – Soprano and Alto saxophones and EWI (piccolo, flute, clarinet, and sound effects)`,
            image: `charlie.jpg`
        },
        {
            yearlocation: `October 2016  - stageGR, at Meijer Theater in the Grand Rapids Public Museum`,
            title: `Seussical the Musical`,
            instruments: `Reeds 1  – Soprano and Alto saxophones and EWI (piccolo, flute, and clarinet)`,
            image: `seussical.jpg`
        },
        {
            yearlocation: `August 2016  - stageGR, at Calvin College's Gezon Auditorium`,
            title: `"13" the Musical`,
            instruments: `Keyboard 2 and sound effects`,
            image: `r13.jpg`
        },
        {
            yearlocation: `June 2016  - stageGR, at The Ladies Literary Club Auditorium`,
            title: `FAME - the Musical`,
            instruments: `Reed 1 – Soprano, Alto, and Tenor saxophone and EWI (clarinet, flute, and sound effects)`,
            image: `fame.jpg`
        },
        {
            yearlocation: `2016 - Grand Rapids Festival of the Arts`,
            title: `MSBOA District-10 All-Star Jazz Band`,
            instruments: `Tenor Saxophone`,
            image: `baseimage.jpg`
        },
        {
            yearlocation: `February 2016  - stageGR, at The Ladies Literary Club Auditorium`,
            title: `Into The Woods`,
            instruments: `Custom – EWI (flute, piccolo, Bb and A clarinet, bassoon, trumpet, 
                french horns, sound effects, and The Giant's dialogue)`,
            image: `cwoods.jpg`
        },
        {
            yearlocation: `November 2015 - Grand Rapids City High School`,
            title: `Les Misérables`,
            instruments: `Reed 1 book – Alto saxophone and EWI (piccolo, flute, clarinet, and musket sound effects)`,
            image: `blesmiz.jpg`
        },
        {
            yearlocation: `July 2015  - Grand Rapids Civic Theatre`,
            title: `Footloose - the Musical`,
            instruments: `Reed 1 book – Tenor and Bari saxophones and EWI (flute, clarinet, and Moog bass)`,
            image: `afootloose.jpg`
        },
        {
            yearlocation: `June 2015 - The Vocal Music Workshop, at City High School`,
            title: `Disney’s High School Musical`,
            instruments: `EWI (sound effects and parts of Keyboard two), Alto saxophone "street musician" walk-on role`,
            image: `xhsm.jpg`
        },
        {
            yearlocation: `January 2015 - The Vocal Music Workshop, at City High School`,
            title: `Hello Dolly`,
            instruments: `Reed 1 book – Alto saxophone and EWI (clarinet, flute, piccolo, and sound effects)`,
            image: `dolly.jpg`
        },
        {
            yearlocation: `November 2014 - Grand Rapids City High School`,
            title: `Honk!`,
            instruments: `Reed 1 book – Alto saxophone and EWI (clarinet, flute, piccolo, and sound effects)`,
            image: `honk.jpg`
        },
        {
            yearlocation: `June 2014 - The Vocal Music Workshop, at City High School`,
            title: `Footloose - the Musical`,
            instruments: `Tenor and Bari saxophones, and EWI (clarinet and Moog bass) and EWI flute for rehearsals`,
            image: `afootloose.jpg`
        },
        {
            yearlocation: `January 2014 - The Vocal Music Workshop, at City High School`,
            title: `How to Succeed in Business Without Really Trying`,
            instruments: `Alto and Bari saxophones`,
            image: `lbusiness.jpg`
        },
        {
            yearlocation: `November 2013 - Grand Rapids City High School`,
            title: `Once On This Island`,
            instruments: `Soprano saxophone`,
            image: `once.jpg`
        },
        {
            yearlocation: `June 2013 - The Vocal Music Workshop, at Ottawa Hills High School`,
            title: `Seussical the Musical`,
            instruments: `Alto and Tenor saxophones`,
            image: `seussical.jpg`
        },
        {
            yearlocation: `March 2013 - Grand Rapids City High School`,
            title: `Annie`,
            instruments: `Alto Saxophone`,
            image: `kannie.png`
        },
        {
            yearlocation: `November 2012 - Grand Rapids City High School`,
            title: `Joseph and The Amazing Technicolor Dreamcoat`,
            instruments: `Alto Saxophone`,
            image: `ejoseph.jpg`
        }
    ],
}

const journalStrings = {
    months: [
        {
            month: "August 2014",
            body: `
                For my tenth grade personal project, I knew that I wanted to do something 
                that related to my passion for music. The issue was that there are many different 
                possibilities in the realm of music, and I did not know what I should actually do 
                for my personal project. The first thing I thought of was to rebuild a broken 
                saxophone. I have been interested in learning about how saxophones work and how 
                to repair them, so I thought that it would be the perfect opportunity to do so. 
                However, after looking for a non-working saxophone on the internet, I realized 
                that this project would be very costly. Also, after doing some research on 
                re-padding saxophones, I realized that I would have to learn from an expert 
                saxophone technician. Therefore, I would not be able to complete this project 
                independently. For these reasons, I decided against this idea.<br/>

                After I rejected that idea, I had two ideas remaining. I could learn a difficult 
                song on my alto saxophone and perform it at Solo & Ensemble, or I could learn a 
                multi-part piece and record it, since I can play multiple types of saxophones. 
                After thinking about the two options, I realized that I could combine the two ideas. 
                I quickly went to my computer and searched for saxophone quartet sheet music. 
                The search for a fun yet challenging saxophone quartet piece began.<br/>

                As I searched for music, I thought about what level would be challenging enough for 
                this project and for my skill level. In band class, we usually play music that is 
                around medium difficulty. I have a pretty easy time with this difficulty of music, 
                except for the occasional song or 16th-note run. At first, I was looking up songs 
                that were in the medium advanced range. Some songs I considered that were in this 
                range were "Alexander’s Ragtime Band" and "Mancini Digs That Mambo." For some unknown 
                reason, I decided to look at the advanced level songs too. This is where I found the 
                song "Paquito de Habana". I fell in love with this song. I love playing Latin-style 
                music as well as jazz, so I knew that this song would be perfect. It did not matter 
                to me that it was an advanced level piece. I figured that it would be good if I really 
                challenged myself, since this was for my personal project.<br/>
                
                My parents ordered the song, and it arrived in the mail a few days later. When I first 
                saw all the music, I was shocked. I did not expect there to be so much music. However, 
                the music included a score and a transcription of the soprano saxophone part for alto 
                saxophone, as well as all the other parts. I was very excited to start learning the 
                parts, beginning with the baritone saxophone part, since the bass part in Latin-style 
                music is very important.`
        }
    ]

}

export {
    homeStrings,
    resumeStrings,
    journalStrings,
}