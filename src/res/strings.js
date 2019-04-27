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
            body: [
                `
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
                independently. For these reasons, I decided against this idea.`,
                `
                After I rejected that idea, I had two ideas remaining. I could learn a difficult 
                song on my alto saxophone and perform it at Solo & Ensemble, or I could learn a 
                multi-part piece and record it, since I can play multiple types of saxophones. 
                After thinking about the two options, I realized that I could combine the two ideas. 
                I quickly went to my computer and searched for saxophone quartet sheet music. 
                The search for a fun yet challenging saxophone quartet piece began.,
                `,
                `
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
                challenged myself, since this was for my personal project.`,
                `
                My parents ordered the song, and it arrived in the mail a few days later. When I first 
                saw all the music, I was shocked. I did not expect there to be so much music. However, 
                the music included a score and a transcription of the soprano saxophone part for alto 
                saxophone, as well as all the other parts. I was very excited to start learning the 
                parts, beginning with the baritone saxophone part, since the bass part in Latin-style 
                music is very important.`
            ],
            audio: null
        },
        {
            month: "September 2014",
            body: [
                `
                I have decided to start with the baritone saxophone part because the bass 
                line will be easier to learn than the melody. The bass line also makes 
                everything else flow and sets the rhythm. This is why I want to lay down 
                the bass line in the baritone saxophone part first. The music is definitely 
                more difficult than I originally expected. However, what can I expect when 
                the piece is marked as advanced?
                `,
                `
                As I have practiced the baritone saxophone part, I have noticed that it is 
                very difficult to understand all the rhythms. There is also a baritone 
                saxophone solo that I cannot play without the background melodies. This may 
                be because I have not attempted to learn the melody or any other parts at 
                this point in time. I will continue to practice the baritone saxophone part, 
                but I may have to switch to another part to be able to come back and comprehend 
                this part better.
                `,
                `
                I have officially decided to switch to the first alto saxophone part as my first 
                part to learn and lay down. The baritone saxophone part is too difficult to 
                play without any of the other tracks or melodies known yet, especially with the 
                complexity of the rhythms and chord changes in the solo section. 
                `
            ],
            audio: null
        },
        {
            month: "October 2014",
            body: [
                `
                I talked to my EPIC teacher, Mr. Van Til, about my personal project recently. 
                He said that I have a good idea on what I am going to do, but I should find 
                something else to write about that would relate it to the rest of the world. 
                I have decided to add a bit about the origins of Latin-style jazz music into 
                my writing. This would connect my project to the rest of the world.
                `,
                `
                As my project has progressed, I have begun to realize how difficult it really 
                is to find time to actually practice. Because of all my other commitments, I 
                rarely ever find time to practice any music, let alone my personal project. 
                My commitment to playing in the pit orchestra for City High’s musical is 
                definitely taking the majority of my time away, as well as homework, friends, 
                and other commitments that I cannot break. I practice whenever I can find the 
                time, but this time is very limited and I can barely get any work done. I do 
                not feel close to being ready to record the first part, and that scares me 
                because the deadline is approaching faster than I thought. I will still try 
                to fit in practicing whenever I can, but I may have to wait until Christmas 
                Break to really work on it a lot and get the first tracks laid down. It will 
                also be a good time to have my dad teach me about how to record the tracks, 
                which also includes supervising me as I actually record the parts.
                `
            ],
            audio: null
        },
        {
            month: "December 2014",
            body: [
                `
                Today, I recorded the first alto saxophone part. Going for a darker and 
                smoother tone, I placed the microphone near the saxophone at a 90 degree 
                angle to the body of the saxophone. I used a very good microphone, an 
                Audio-Technica AT4050/CM5, which my mom bought me. I used Sonar X3 to 
                record this part. I also started recording with a rhythm track to keep 
                track of the beat and to get the samba feel. I had to go back and re-record 
                a few parts of the song, because I had messed up in the first two full takes. 
                However, through layering and precise timing, I made the different recordings 
                sound like one flowing saxophone part, which was the sound I wanted for this 
                saxophone quartet. 
                `
            ],
            audio: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/195265535%3Fsecret_token%3Ds-ei1ht&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
        },
        {
            month: "January 2015",
            body: [
                `
                I have now recorded the tenor saxophone part, which is the second part out of 
                four. This recording session was a little different. My father encountered a 
                serious bug in Sonar X3 when working on a separate project. He then purchased 
                Cubase Pro 8 to replace the faulty software. This meant I had to learn about a 
                new software, which made things much more difficult. Luckily, my dad had learned 
                how to use the new software and helped me through the recording process much 
                more than the first session. After copying the rhythm track and the first alto 
                saxophone part into Cubase, I was finally able to record my tenor saxophone.
                `,
                `
                This time, there were more spots that had to be re-recorded. It may have been 
                because the tenor part was much more difficult than the first alto part. I am 
                very accustomed to the alto saxophone, and the tenor is a little bit more foreign 
                to my embouchure. After this experience, I have learned that the different 
                mouthpiece hurts my jaw as I play my tenor. I may want to find a new mouthpiece 
                in the near future. However, I worked with what I had, and I feel that I am 
                creating a great masterpiece. Now, I will begin practicing the baritone saxophone 
                part once more. I have a feeling that it will not be as much of a challenge as it 
                was in the beginning.
                `
            ],
            audio: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/195266008%3Fsecret_token%3Ds-NBblA&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
        },
        {
            month: "February 2015",
            body: [
                `
                Today is the day after my school’s Valentine’s Day Dance, and I just finished 
                recording the baritone saxophone part. The part was definitely still a challenge 
                to master, but I found it much easier to learn by playing along to the first alto 
                saxophone and tenor saxophone parts. The most challenging part was the solo section. 
                Because I am starting to get low on time, I have decided to go with the written solos. 
                It will save me time, energy, and brain power by not attempting to figure out an 
                improvisational solo over the many different chord changes. Of course, I did add a 
                little bit of my style into the solo to make it my own, but basing it off of the 
                written solo has helped me tremendously. I feel like this recording session was the 
                best one I have had so far. After today, I will begin practicing the final part of 
                this quartet, which is the solo alto saxophone part.
                `
            ],
            audio: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/195266997%3Fsecret_token%3Ds-BOHdw&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
        },
        {
            month: "March 2015",
            body: [
                `
                Yesterday, I recorded the solo alto saxophone part, which was a huge success. I only 
                had to re-record about three little parts to create the final result. I was able to 
                play the solo perfectly the first time through, which I had never done before. I 
                added emotion and life to the solo and the melodies. I feel amazing about that part 
                and the entire song as a whole. The next step will be to mix all of the tracks together.
                `
            ],
            audio: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/195267302%3Fsecret_token%3Ds-xYlcn&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
        }
    ]
}

const reportStrings = {
    paragraphs: [
        {
            text: `
                “The word music is derived from the name of the nine daughters of Zeus, the Muses. 
                In Greek mythology the Muses were the patronesses of the arts.  The arts reflected, 
                then and now, political ideals, in their quest for freedom and artistic beauty.” 
                (D'Rivera)`,
            image: null
        },
        {
            text: `
                For my tenth grade personal project, I knew that I wanted to do something that related 
                to my passion for music.  My life has been full of music for as long as I can remember, 
                so naturally I would choose a project that would allow me to expand in the field of 
                music.  The issue was that there are many different possibilities in the realm of music, 
                and I did not know what I should actually do for my personal project.  The first thing 
                I thought of was to rebuild a broken saxophone.  I have been interested in learning about 
                how saxophones work and how to repair them, so I thought that it would be the perfect 
                opportunity to do so.  However, after looking for a non-working saxophone on the internet, 
                I realized that this project would be very costly.  Also, after doing some research on 
                re-padding saxophones, I realized that I would have to learn from an expert saxophone 
                technician.  The process of re-padding a saxophone is also very costly, and it can change 
                the tone of the saxophone depending on the padding and resonators you use (Saxophone.org). 
                Therefore, I would not be able to complete this project independently.  For these reasons, 
                I decided against this idea.`,
            image: {
                url: "nadia-process.jpg",
                credit: null
            }
        },
        {
            text: `
                After I rejected that idea, I had two ideas remaining.  I could learn a difficult song on my 
                alto saxophone and perform it at Solo & Ensemble, or I could learn a multi-part piece and record 
                it.  This was an option because my primary instrument is the alto saxophone, but I have also 
                learned to play the soprano, tenor, and baritone saxophones for the eight musicals I have played 
                for.  This was also an option, because my dad owns a small, in-home recording studio known as 
                Rojo Digital Media Productions.  After thinking about the two options, I realized that I could 
                combine the two ideas.  I quickly went to my computer and searched for saxophone quartet sheet 
                music.  The search for a fun yet hard saxophone quartet began.`,
            image: null
        },
        {
            text: `
                As I searched for music, I thought about what level would be challenging enough for this project 
                and for my comfort level.  In band class, we usually play music that is around medium difficulty. 
                I have a pretty easy time with this difficulty of music, except for the occasional song or 16th 
                note run.  At first, I was looking up songs that were in the medium advanced range.  I found no 
                songs at the level that inspired me.  If I was going to make this work, I needed a piece of music 
                that made me excited to learn it.  That is when I decided to look at the advanced level songs. 
                This is where I found the song "Paquito de Habana" by Rick Hirsch (J.W. Pepper).  I fell in love 
                with the song.  I have always loved playing Latin-style music as well as jazz, so I knew that 
                this song would be perfect.  I have played in a school jazz band for five years, and my favorite 
                pieces to play were usually the Latin pieces.  Latin music has many talented artists who play it, 
                including Paquito de Rivera, who is given tribute in this song (HirschMusic Publications). 
                Latin music can also be one of the most fun genres to improvise in.  It did not matter to me that 
                it was an advanced level piece.  I figured that it would be good if I really challenged myself, 
                since this was for my personal project.`,
            image: null
        },
        {
            text: `
                Paquito D’Rivera was born in Havana, Cuba in 1948.  He has produced 30 solo albums and has worked 
                with many different artists to create music and ensembles.  His discography includes jazz, bebop, 
                latin, and even classical music.  He was also one of the founding members of the United Nation 
                Orchestra.  This group was a 15-piece ensemble organized by Dizzy Gillespie to mix the different 
                styles of Latin and Caribbean music as well as jazz (Greenbug Productions).  Jazz is very popular 
                throughout the Caribbean, and many Cuban jazz musicians, such as Paquito, are famous and known 
                around the world (insightCuba).  Cuban music has influenced genres such as Latin Jazz, which has 
                been influenced greatly by many other musical traditions like those of New Orleans.  However, as 
                the world becomes even more connected through music, Latin music will always continue to evolve and 
                “reflect the global heartbeat” (Ilich).  While Cuban music has influenced the development of jazz 
                and salsa, it has also been influenced by genres from France, the United States, and Jamaica 
                (Boogalu Productions).  Popular music styles in Cuba are truly everywhere, ranging from salsa, 
                merengue, rumba, jazz, and the cha cha cha to the mambo, danzon, bolero, and reggaeton, which can 
                all be found around the island (Cubano).  After learning about all these different influences in 
                Cuban music, I wanted to begin my project even more.`,
            image: {
                url: "rivera.jpg",
                caption: "(http://www.cubanartnews.org/artwork/Paq_sax_standing.jpg)"
            }
        },
        {
            text: `
                After learning about the origins of the song, I had to develop a strategy on how I would create the 
                final product.  My plan to get my personal project done was pretty simple.  I had decided the order 
                that I would practice the different parts as a way to get them completed as quickly and as efficiently 
                as possible.  The first part I was going to practice was the soprano saxophone part on my alto saxophone. 
                After that came the tenor saxophone part, then the baritone saxophone part, and finally the original 
                alto saxophone part.  I chose this order because of the way the improvisational solos worked out in the 
                baritone saxophone and alto saxophone parts.  Of course, this order was subject to change, which had 
                already been seen with the change from baritone saxophone to first alto saxophone.  However, no further 
                changes were made in this schedule.  My plan to record the parts was to record them when I felt like I 
                had mastered the parts.  Once that had occurred, I set up a time for my father to be around to supervise 
                my recording process and to make sure that I was doing everything correctly.  This plan worked out very 
                well, as I was able to create the chords and backgrounds before adding the improvisational solos.  I was 
                also able to save my favorite saxophone part until the very end, ending on a very high note.`,
            image: null
        },
        {
            text: `
                To make sure that I would finish this project to the best of my ability, I was going to practice at any 
                time that I had the chance.  However, I knew that with school, homework, friends, family, commitments, 
                and musicals, it was going to be difficult to find time to actually practice.  This had already occurred 
                with the fall musical, HONK! The Musical.  I had a very hard time finding any time to practice, and when 
                I did find time, I practiced the music for the pit orchestra and not my personal project.  I also had Hello, 
                Dolly! taking away valuable time as well.  Because of this, I planned to practice my personal project music 
                every weekend for at least 30 minutes.  This plan was not well thought out, however.  As the school year 
                progressed, the work load increased.  I rarely had time to sit down with my family and relax, let alone 
                practice for my personal project.  I should have prepared for the weekends in which I had so much homework, 
                I could not find the time to practice.`,
            image: null
        },
        {
            text: `
                Finally, I figured out what I hoped I would find in my final product.  I had many requirements and goals 
                for this project.  When I finished my personal project, I hoped to have a fully recorded piece of music 
                that I recorded all by myself using Sonar X3 under the supervision of my father in his in-home recording 
                studio.  I hoped that I would have mastered every individual part of the piece of music and that the 
                recordings would reflect that.  Every part would have little to no mistakes, especially in the recordings, 
                and a little editing of tracks would be required.  The tracks would be lined up well to make a coherent 
                and smooth song to listen to.  The song would be put on the internet on a website known as SoundCloud 
                which would allow anyone to listen to it if they have the link to the song.  This link should be put on 
                the website that I created.  My process journal and essay would be incorporated into the website in some 
                way along with the recording of the song.  Those were the major goals I had for this project.`,
            image: null
        },
        {
            text: `
                I was ready to begin practicing “Paquito de Habana”.  I practiced each part for at least one month or until 
                I felt like I was ready to record.  I practiced along with the official recording I found online (HirschMusic).  
                I had prepared myself for the recording sessions by reading articles and books and talking to my dad about 
                the software I would use.  I set up my microphone near my saxophone and pointed at a 90 degree angle to the 
                body of the saxophone (Orenstein).  I set the microphone preamplifier to get a solid clean signal.  I armed 
                the track, got ready, and began recording.  After the first take, I had to re-record sections of the performance 
                using a technique called “punching in” (McIan and Wichman).  Once all the tracks were finally recorded, I 
                added dynamics and brought out the solos by mixing the four different tracks together.  Finally, I added a 
                slight reverb, and the song was complete.`,
            image: null
        },
        {
            text: `
                I faced many problems while creating my project.  The main problem through the entire process was my plan of 
                using Sonar X3 to record and mix the tracks.  While my father was working on Sonar X3 for another project, he 
                encountered a serious bug in the software.  After contacting technical support, it was determined that the bug 
                could not be easily fixed (Schrum).  Therefore, he switched from Sonar X3 to Cubase.  This affected my project, 
                because all of the previously recorded tracks had to be moved from one to the other.  I also had to learn an 
                entirely new software and how to record and mix with it.  Fortunately, I found Cubase to be much easier to use 
                than Sonar because of its simpler design and user interface.  For example, Sonar X3 requires a complex setup 
                procedure to punch in part of a track (Garrigus).  Another problem that I faced was the sheer difficulty of the 
                piece.  It took me much longer than I would have preferred to learn and perfect each part.  The enormous amounts 
                of accidentals and the complex rhythms increased the challenge and the length of each practice.  However, I 
                eventually was able to develop muscle memory for the technical passages, making the recording sessions easier.`,
            image: {
                url: "cakewalk.png",
                caption: "An email between Cakewalk and my father. Picture courtesy of my father."
            }
        },
        {
            text: `
                For the most part, I accomplished what I set out to create.  I recorded Paquito de Habana by myself under my 
                father’s supervision in his in-home recording studio.  I felt like I had mastered each part before stepping 
                foot in the studio to record the part.  If I made mistakes while recording, I was able to re-record the parts 
                I messed up.  Making sure that each part was lined up with the others, it was easy to make the parts sound 
                correct and coherent with one another.  I posted the song to SoundCloud and on my website.  The only part of 
                my original plan that I was not able to complete was my goal to record and mix all of the parts on Sonar X3.  
                There were technical difficulties in Sonar X3, forcing me to switch to Cubase.  However, it actually became 
                very important to the success of my project, because the new software was much easier to understand.  I learned 
                the basics quickly, and I was able to record, mix, and edit my tracks much more easily because of the simplicity 
                of the user interface and controls.  My final project was a success according to my criteria.`,
            image: null
        },
        {
            text: `
                I learned about many different things throughout the course of my project.  First, I learned about Cuban jazz 
                and how it has evolved and interacted with the other Latin American versions of it to create something new 
                (Ferguson).  Cuban music would not be what it is today without the influences from the civilizations and countries 
                surrounding Cuba.  Next, I learned about Sonar X3.  While it may be a good software at its core, its flaws and 
                complicated structure made it unusable for my project, forcing me to switch to Cubase.  This change forced me 
                to learn about a brand new software for this project, which was tedious at the time.  However, Cubase became 
                one of the best decisions I made throughout my project, because it was much simpler to use than Sonar X3.  
                Finally, I learned a bit more about how to play the saxophone and how to create muscle memory for so many different 
                technical passages.  I even learned more about what my father does for City High School’s musicals when he edits 
                and remixes the audio for the official video.  I was able to connect to a wider world, including my father’s 
                interests and how Cuban music has changed throughout the years.`,
            image: null
        },
        {
            text: `
                In conclusion, my personal project was a complete success.  I produced a final product that I am proud to share 
                with the world.  I have already received many compliments from friends and professional musicians on Facebook.  
                With each message that comes in, I feel more and more accomplished with the final result.  My talents and skills 
                with the saxophone have grown and improved, and I have learned how to use Cubase.  I now have the ability to 
                record my own music whenever I find inspiration.  I have enjoyed creating this final product, and I believe that 
                my version of “Paquito de Habana” is truly a masterpiece.`,
            image: {
                url: "facebook.png",
                caption: null
            }
        },
    ]
}

export {
    homeStrings,
    resumeStrings,
    journalStrings,
    reportStrings
}