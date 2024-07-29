document.addEventListener('DOMContentLoaded', () => {
    const countries = [
        {
            name: "Germany",
            flag: "gifs/germany.gif",
            page: "countries/germany/germany.html",
            toursLink: "https://citywalks.live/city/germany-berlin/",
            sustainabilityFacts: "Germany is a leader in renewable energy, with a significant portion of its energy coming from wind and solar power.",
            lat: 51.1657,
            lon: 10.4515
        },
        {
            name: "Sweden",
            flag: "gifs/sweden.gif",
            page: "countries/sweden/sweden.html",
            toursLink: "https://citywalks.live/city/sweden-stockholm-2/",
            sustainabilityFacts: "Sweden aims to achieve net-zero greenhouse gas emissions by 2045 and is known for its extensive recycling programs.",
            lat: 62.6138157495403,
            lon: 14.712364534236972
        },
        {
            name: "Spain",
            flag: "gifs/spain.gif",
            page: "countries/spain/spain.html",
            toursLink: "https://citywalks.live/city/spain-madrid/",
            sustainabilityFacts: "Spain has made significant investments in solar energy and has one of the largest solar power plants in the world.",
            lat: 38.440576638421916,
            lon: -4.098618025401881
        },
        {
            name: "Greece",
            flag: "gifs/greece.gif",
            page: "countries/greece/greece.html",
            toursLink: "https://citywalks.live/city/greece-athens/",
            sustainabilityFacts: "Greece is focusing on expanding its use of renewable energy sources, particularly wind and solar power.",
            lat: 39.0742,
            lon: 21.8243
        },
        {
            name: "Netherlands",
            flag: "gifs/netherlands.gif",
            page: "countries/netherlands/netherlands.html",
            toursLink: "https://citywalks.live/city/netherlands-amsterdam/",
            sustainabilityFacts: "The Netherlands is known for its sustainable urban planning and extensive use of bicycles for transportation.",
            lat: 52.1326,
            lon: 5.2913
        }
    ];
    const destinationsInGermany = [
        {
            name: "Green City Freiburg",
            description: "Freiburg is known for its sustainable urban planning and green initiatives.",
            link: "https://wwf.panda.org/wwf_news/?204419/Freiburg-green-city",
            lat: 47.9990,
            lon: 7.8421
        },
        {
            name: "Ecovillage Sieben Linden",
            description: "Sieben Linden is an eco-village focused on sustainability and renewable energy.",
            link: "https://siebenlinden.org/en/ecovillage-2/sieben-linden/",
            lat: 52.5565,
            lon: 10.5381
        },
        {
            name: "HafenCity Hamburg",
            description: "HafenCity is one of the largest inner-city redevelopment projects in Europe with a focus on sustainable development.",
            link: "https://www.hafencity.com/en/urban-development/sustainability",
            lat: 53.5400,
            lon: 10.0100
        },
        {
            name: "Spreewald Biosphere Reserve",
            description: "The Spreewald Biosphere Reserve is a network of canals and wetlands, promoting traditional and sustainable agriculture.",
            link: "https://www.spreewald.de/en/activities-map/nature-experiences/nature-conservation-biosphere-reserve/unesco-spreewald-biosphere-reserve",
            lat: 51.8500,
            lon: 14.0333
        },
        {
            name:"Lower Saxony Wadden Sea National Park",
            description: "Part of the UNESCO World Heritage Wadden Sea, it supports eco-friendly tourism and protects its unique tidal ecosystem",
            link: "https://whc.unesco.org/en/list/1314/",
            lat: 53.5833,
            lon: 8.5000
        }
    ];

    const destinationsInNetherlands = [
        {
            name: "Schouwen-Duiveland",
            description: "A beautiful island known for its efforts to preserve its rich nature, reduce pollution and waste, save energy and reduce car-use.",
            link: "https://goodtravel.guide/schouwen-duiveland/",
            lat: 51.69440336535843,
            lon: 3.929343392962169
        },
        {
            name: "Groningen Energy City",
            description: "Groningen is known for its innovative energy solutions and sustainable urban planning.",
            link: "https://makingcity.eu/groningen/",
            lat: 53.2194,
            lon: 6.5665
        },
        {
            name: "The Hague",
            description: "A proud SDG city committed to realizing the United Nations' 17 Sustainable Development Goals by implementing the infrastructure for a sustainable future",
            link: "https://www.denhaag.nl/en/sustainability",
            lat: 52.0705,
            lon: 4.3007
        },
        {
            name: "Amsterdam",
            description: "Amsterdan, the capital of the Netherlands, is the epitome of sustainability with its implementation of green roofs",
            link: "https://livingroofs.org/green-roofs-in-the-netherlands/",
            lat: 52.3676,
            lon: 4.9041
        },
        {
            name: "Resort Veluwe",
            description: "A sustainable eco-resort located in the Veluwe region, known for its natural beauty.",
            link: "https://www.topparken.com/resort-veluwe",
            lat: 52.1690,
            lon: 5.6283
        }
    ];
    
    const destinationsInGreece = [
        {
            name: "Agai Pelagia - Crete",
            description: "This resort is home to multiple eco-friendly farms, including one built entirely using recycled materials",
            link: "https://ecohotelcrete.com/",
            lat: 35.40829916552912,
            lon: 25.01712570290497
        },
        {
            name: "Tinos Eco Lodge - Cyclades",
            description: "Property on the island of Tinos that operates off the grid, using energy from photovoltaics only",
            link: "https://ecotourism-greece.com/hotel/tinos-eco-lodge/",
            lat: 37.56575974652794,
            lon: 25.215492808626614
        },
        {
            name: "Sienna Eco Resort - Santorini",
            description: "A luxury eco-resort on Santorini island with sustainable practices and eco-friendly amenities.",
            link: "https://www.siennaresort.com/",
            lat: 36.42103890651636,
            lon: 25.451564622052913
        },
        {
            name: "Bioporos Organic Farm",
            description: "An organic farm in Corfu promoting sustainable agriculture and environmental conservation.",
            link: "https://bioporos.gr/",
            lat: 39.452449682863005,
            lon: 19.904477
        },
        {
            name: "Andros",
            description: "The Posidonia Meadows are endemic to the Mediterranean and are vital for filtering the seawater, limiting coastal erosion and hosting marine life – all while absorbing 15 times more CO2 than a similar sized plot in the Amazon rainforest. ",
            link: "https://www.greece-is.com/andros-routes-story-sustainability/",
            lat: 37.83673991413889,
            lon: 24.93766090620795
        }
    ];
    
    const destinationsInSweden = [
        {
            name: "Stockholm Eco-District",
            description: "An eco-district in Stockholm designed with sustainable architecture and green technology.",
            link: "https://www.thenatureofcities.com/2014/02/12/hammarby-sjostad-a-new-generation-of-sustainable-urban-eco-districts/",
            lat: 59.3293,
            lon: 18.0686
        },
        {
            name: "Göteborg Sustainable City",
            description: "Göteborg features several sustainable city initiatives and green building projects.",
            link: "https://www.goteborg.com/en/guides/the-worlds-most-sustainable-destination",
            lat: 57.7089,
            lon: 11.9746
        },
        {
            name: "Uppsala Green Campus",
            description: "Uppsala University’s green campus promoting sustainable practices and eco-friendly research.",
            link: "https://www.uu.se/en/campus/gotland/sustainable-development",
            lat: 59.8586,
            lon: 17.6389
        },
        {
            name: "Malmö Sustainable Living",
            description: "Malmö has various projects focused on sustainable living and renewable energy.",
            link: "https://www.malmo.se/sustainable-living",
            lat: 55.6050,
            lon: 13.0038
        },
        {
            name: "Visby Eco-Project",
            description: "An eco-project in Visby focusing on sustainable tourism and environmental conservation.",
            link: "https://www.visby.se/eco-project",
            lat: 57.6404,
            lon: 18.2954
        }
    ];
    
    const destinationsInSpain = [
        {
            name: "Barcelona Green Roofs",
            description: "Barcelona features several green roofs as part of its sustainability efforts.",
            link: "https://www.barcelona.cat/green-roofs",
            lat: 41.3851,
            lon: 2.1734
        },
        {
            name: "Madrid Eco-City",
            description: "Madrid is implementing eco-city initiatives to improve sustainability and reduce emissions.",
            link: "https://www.madrid.es/eco-city",
            lat: 40.4168,
            lon: -3.7038
        },
        {
            name: "Valencia Sustainable Parks",
            description: "Valencia has multiple parks dedicated to sustainability and environmental education.",
            link: "https://www.valencia.es/sustainable-parks",
            lat: 39.4699,
            lon: -0.3763
        },
        {
            name: "Granada Green Initiatives",
            description: "Granada is known for its green initiatives and sustainable urban planning.",
            link: "https://www.granada.org/green-initiatives",
            lat: 37.1882,
            lon: -3.6067
        },
        {
            name: "Bilbao Eco-Tourism",
            description: "Bilbao promotes eco-tourism and sustainable practices through various local projects.",
            link: "https://www.bilbao.eus/eco-tourism",
            lat: 43.2630,
            lon: -2.9350
        }
    ];
    
    let currentCountryIndex = 0;
    let currentQuestionIndex = 0;


    const journals = {
        journal1: {
            title: "Journal 1",
            content: ["Content part 1", "Content part 2", "Content part 3"]
        },
        journal2: {
            title: "Journal 2",
            content: ["Content part A", "Content part B", "Content part C"]
        },
    };

    function initializeJournalsSection() {
        const journalBoxes = document.querySelectorAll('.journal-box');
        journalBoxes.forEach(box => {
            box.addEventListener('click', () => {
                showJournalDetail(box.getAttribute('data-journal'));
            });
        });
    }

    function showJournalDetail(journalId) {
        // Hide the journal grid and show the journal detail section
        document.querySelector('.journal-grid').style.display = 'none';
        const journalDetail = document.getElementById('journal-detail');
        journalDetail.style.display = 'block';

        // Clear previous content
        const journalTitle = document.getElementById('journal-title');
        const journalContent = document.getElementById('journal-content');
        journalTitle.textContent = '';
        journalContent.innerHTML = '';

        // Add new content based on the selected journal
        const journal = journals[journalId];
        journalTitle.textContent = journal.title;
        journalContent.innerHTML = `
            <h3>Content</h3>
            <ul>
                ${journal.content.map(contentPart => `<li>${contentPart}</li>`).join('')}
            </ul>
        `;
    }

    const triviaQuestions = [
        {
            question: "What is one simple action you can take at home to reduce your carbon footprint?",
            options: ["Use disposable plates", "Leave lights on", "Use plastic bags", "Recycle waste"],
            answer: "Recycle waste"
        },
        {
            question: "Which mode of transportation generally has the lowest carbon footprint for short distances?",
            options: ["Flying", "Taking a bus", "Riding a bicycle", "Driving a car"],
            answer: "Riding a bicycle"
        },
        {
            question: "What is the environmental benefit of carpooling?",
            options: ["Uses more fuel", "Reduces the number of vehicles on the road", "Increases traffic congestion", "Causes more pollution"],
            answer: "Reduces the number of vehicles on the road"
        },
        {
            question: "How can adjusting your thermostat help reduce your carbon footprint?",
            options: ["By keeping your home warmer in summer", "By increasing your energy bills", "By using less energy for heating and cooling", "By keeping your home cooler in winter"],
            answer: "By using less energy for heating and cooling"
        },
        {
            question: "Why is using a reusable water bottle more eco-friendly than disposable ones?",
            options: ["It’s more expensive", "It reduces plastic waste", "It increases plastic production", "It’s heavier to carry"],
            answer: "It reduces plastic waste"
        },
        {
            question: "What is the impact of eating a plant-based diet on your carbon footprint?",
            options: ["Increases methane emissions", "Increases carbon footprint", "Reduces carbon footprint", "Has no impact"],
            answer: "Reduces carbon footprint"
        },
        {
            question: "How can you reduce your carbon footprint when booking a flight?",
            options: ["Book first class", "Fly on older planes", "Book economy class", "Choose flights with layovers"],
            answer: "Book economy class"
        },
        {
            question: "What is a carbon offset and how can it help when traveling?",
            options: ["A travel insurance policy", "Extra luggage allowance", "A donation to environmental projects to balance emissions", "A fee to travel agencies"],
            answer: "A donation to environmental projects to balance emissions"
        },
        {
            question: "Why is it important to unplug electronic devices when they’re not in use?",
            options: ["To save energy and reduce carbon footprint", "To prevent data loss", "To avoid internet usage", "To make them last longer"],
            answer: "To save energy and reduce carbon footprint"
        },
        {
            question: "How does using public transportation reduce your carbon footprint?",
            options: ["Reduces the number of vehicles on the road", "Uses more fuel than personal cars", "Increases traffic jams", "Causes more pollution"],
            answer: "Reduces the number of vehicles on the road"
        },
        {
            question: "What is one benefit of walking or biking instead of driving?",
            options: ["Increases fuel consumption", "Reduces greenhouse gas emissions", "Causes more traffic", "Requires more road maintenance"],
            answer: "Reduces greenhouse gas emissions"
        },
        {
            question: "Why should you consider staying in eco-friendly accommodations when traveling?",
            options: ["They are less comfortable", "They use sustainable practices", "They are more expensive", "They have fewer amenities"],
            answer: "They use sustainable practices"
        },
        {
            question: "How does reducing meat consumption lower your carbon footprint?",
            options: ["Increases deforestation", "Uses less water and land resources", "Requires more energy for cooking", "Increases methane production"],
            answer: "Uses less water and land resources"
        },
        {
            question: "What is a simple way to conserve water at home?",
            options: ["Water the lawn daily", "Take shorter showers", "Let the faucet run while brushing teeth", "Wash clothes in hot water"],
            answer: "Take shorter showers"
        },
        {
            question: "How can using energy-efficient appliances help reduce your carbon footprint?",
            options: ["They cost more", "They use less energy", "They consume more energy", "They are less durable"],
            answer: "They use less energy"
        },
        {
            question: "Why is it better to buy local produce?",
            options: ["Increases food waste", "Uses more packaging", "Increases food prices", "Reduces transportation emissions"],
            answer: "Reduces transportation emissions"
        },
        {
            question: "How can taking shorter showers contribute to reducing your carbon footprint?",
            options: ["Uses less water and energy", "Uses more water", "Increases energy bills", "Increases water heating time"],
            answer: "Uses less water and energy"
        },
        {
            question: "Why should you bring reusable bags when shopping?",
            options: ["To carry more items", "To get discounts", "To spend more money", "To reduce plastic waste"],
            answer: "To reduce plastic waste"
        },
        {
            question: "What is one way to reduce your carbon footprint when doing laundry?",
            options: ["Wash clothes in hot water", "Use a clothes dryer", "Wash small loads frequently", "Air dry clothes"],
            answer: "Air dry clothes"
        },
        {
            question: "How can participating in tree-planting activities help the environment?",
            options: ["Increases deforestation", "Reduces greenhouse gases", "Uses more water", "Causes soil erosion"],
            answer: "Reduces greenhouse gases"
        }
    ];
    
    
    

    function updateToursLink() {
        const toursIframe = document.getElementById('tours-info').querySelector('iframe');
        if (toursIframe) {
            toursIframe.src = countries[currentCountryIndex].toursLink;
        }
    }

    function initializeFlagsSection() {
        const countryDisplay = document.getElementById('country-display');
        countryDisplay.innerHTML = '';

        countries.forEach((country, index) => {
            const countryDiv = document.createElement('div');
            countryDiv.classList.add('country-item');
            countryDiv.innerHTML = `
                <img src="${country.flag}" alt="${country.name} Flag">
                <h2>${country.name}</h2>
            `;
            countryDiv.addEventListener('click', () => {
                currentCountryIndex = index;
                updateToursLink();
                showSection('tours');
            });
            countryDisplay.appendChild(countryDiv);
        });

        let currentIndex = 0;

        function scrollTo(direction) {
            const totalItems = countryDisplay.children.length;
            if (direction === 'left') {
                currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            } else if (direction === 'right') {
                currentIndex = (currentIndex + 1) % totalItems;
            }
            countryDisplay.style.transform = `translateX(-${currentIndex * 100}vw)`;

            currentCountryIndex = currentIndex;  
            updateToursLink(); 
            updateEcoAccounts(countries[currentCountryIndex].name);
        }

        document.getElementById('scrollLeft').addEventListener('click', () => scrollTo('left'));
        document.getElementById('scrollRight').addEventListener('click', () => scrollTo('right'));
    }

    function showSection(sectionId) {
        document.getElementById('country-info').style.display = 'none';
        document.getElementById('tours-info').style.display = 'none';
        document.getElementById('recipes-info').style.display = 'none';
        document.getElementById('sustainability-info').style.display = 'none';
        document.getElementById('trivia-info').style.display = 'none';
        document.getElementById('blank-canvas').style.display = 'none';

        if (sectionId === 'flags') {
            document.getElementById('country-info').style.display = 'flex';
            initializeFlagsSection();
        } else if (sectionId === 'tours') {
            document.getElementById('tours-info').style.display = 'flex';
            updateToursLink();
        } else if (sectionId === 'recipes') {
            document.getElementById('recipes-info').style.display = 'flex';
            initializeRecipesSection();
        } else if (sectionId === 'sustainability') {
            document.getElementById('sustainability-info').style.display = 'block';
            initializeMap();
        } else if (sectionId === 'trivia') {
            document.getElementById('trivia-info').style.display = 'block';
            initializeTriviaSection();
        } else {
            document.getElementById('blank-canvas').style.display = 'block';
        }
    }

    const countryIcon = L.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Map_marker_icon_%E2%80%93_Nicolas_Mollet_%E2%80%93_World_%E2%80%93_Tourism_%E2%80%93_Classic.png',
        iconSize: [32, 32], 
        iconAnchor: [16, 32], 
        popupAnchor: [0, -32] 
    });
    
    const ecoIcon = L.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/2017-fr.wp-green-pin.svg', 
        iconSize: [32, 32], 
        iconAnchor: [16, 32], 
        popupAnchor: [0, -32] 
    });

    function initializeMap() {
    const map = L.map('map', {
        center: [54.5260, 15.2551], 
        zoom: 4,
        maxZoom: 10,
        minZoom: 3.9,
        maxBounds: [[35, -10], [70, 40]], 
        maxBoundsViscosity: 1.0 
    });

    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWxha2F0MTI0IiwiYSI6ImNsejNnM3Z0cTNxbmQyanB1Y2U1ZnhheTYifQ.6jfNaAAZtE2T6pYAcv2GVQ', {
        attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> & <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        tileSize: 512,
        zoomOffset: -1,
        maxZoom: 18
    }).addTo(map);

    countries.forEach(country => {
        L.marker([country.lat, country.lon], {icon: countryIcon}).addTo(map)
            .bindPopup(`
                <b>${country.name}</b><br>
                ${country.sustainabilityFacts}<br><br>
                <a href="${country.page}" target="_blank">Learn More</a>
            `);
    });

        destinationsInGermany.forEach(destination => {
            L.marker([destination.lat, destination.lon], {icon: ecoIcon}).addTo(map)
                .bindPopup(`
                    <b>${destination.name}</b><br>
                    ${destination.description}<br><br>
                    <a href="${destination.link}" target="_blank">Learn More</a>
                `);
        });

        destinationsInNetherlands.forEach(destination => {
            L.marker([destination.lat, destination.lon], {icon: ecoIcon}).addTo(map)
                .bindPopup(`
                    <b>${destination.name}</b><br>
                    ${destination.description}<br><br>
                    <a href="${destination.link}" target="_blank">Learn More</a>
                `);
        });

        destinationsInGreece.forEach(destination => {
            L.marker([destination.lat, destination.lon], {icon: ecoIcon}).addTo(map)
                .bindPopup(`
                    <b>${destination.name}</b><br>
                    ${destination.description}<br><br>
                    <a href="${destination.link}" target="_blank">Learn More</a>
                `);
        });

        destinationsInSweden.forEach(destination => {
            L.marker([destination.lat, destination.lon], {icon: ecoIcon}).addTo(map)
                .bindPopup(`
                    <b>${destination.name}</b><br>
                    ${destination.description}<br><br>
                    <a href="${destination.link}" target="_blank">Learn More</a>
                `);
        });

        destinationsInSpain.forEach(destination => {
            L.marker([destination.lat, destination.lon], {icon: ecoIcon}).addTo(map)
                .bindPopup(`
                    <b>${destination.name}</b><br>
                    ${destination.description}<br><br>
                    <a href="${destination.link}" target="_blank">Learn More</a>
                `);
        });
}
    

    function displayQuestion(index) {
        const question = triviaQuestions[index];
        const triviaQuestionText = document.getElementById('trivia-question-text');
        const triviaOptionsContainer = document.querySelector('.trivia-options');
        
        triviaQuestionText.textContent = question.question;
        triviaOptionsContainer.innerHTML = ''; 
    
        question.options.forEach(option => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('trivia-option');
            optionDiv.textContent = option;
            optionDiv.setAttribute('data-answer', option);
            triviaOptionsContainer.appendChild(optionDiv);
        });
    
        document.querySelectorAll('.trivia-option').forEach(option => {
            option.addEventListener('click', () => {
                const selectedAnswer = option.getAttribute('data-answer');
                const correctAnswer = triviaQuestions[currentQuestionIndex].answer;
    
                // Remove any previous color classes
                document.querySelectorAll('.trivia-option').forEach(opt => {
                    opt.classList.remove('correct', 'incorrect');
                });
    
                if (selectedAnswer === correctAnswer) {
                    option.classList.add('correct');
                    setTimeout(() => {
                        currentQuestionIndex = (currentQuestionIndex + 1) % triviaQuestions.length;
                        displayQuestion(currentQuestionIndex);
                    }, 1000); // Delay before loading the next question
                } else {
                    option.classList.add('incorrect');
                }
            });
        });
    }

    function initializeTriviaSection() {
        displayQuestion(currentQuestionIndex);
    }

    document.querySelectorAll('nav li').forEach((item) => {
        item.addEventListener('click', () => {
            document.querySelectorAll('nav li').forEach((navItem) => navItem.classList.remove('active'));
            item.classList.add('active');

            const sectionId = item.id.replace('-link', '');
            showSection(sectionId);
        });
    });

    document.getElementById('flags-link').classList.add('active');
    showSection('flags');

    window.addEventListener('load', () => {
        const profilePicUrl = localStorage.getItem('profilePic');
        const userDisplayName = localStorage.getItem('displayName');
        const userEmailAddress = localStorage.getItem('email');

        document.getElementById('profile-pic').src = profilePicUrl || 'default.jpg';
        document.getElementById('user-name').textContent = userDisplayName;
        document.getElementById('user-email').textContent = userEmailAddress;
    });

    document.addEventListener('click', (event) => {
        if (!document.getElementById('profile-container').contains(event.target) &&
            !document.getElementById('overlay').contains(event.target)) {
            document.getElementById('overlay').classList.add('hidden');
        }
    });
    document.getElementById('back-to-recipes').addEventListener('click', () => {
        document.querySelector('.recipe-grid').style.display = 'grid';
        document.getElementById('recipe-detail').style.display = 'none';
    });


    document.getElementById('logout-button').addEventListener('click', () => {
        // Clear user data and redirect to index.html
        localStorage.removeItem('profilePic');
        localStorage.removeItem('displayName');
        localStorage.removeItem('email');
        window.location.href = 'index.html';
    });
});



const travelersData = {
    Germany: [
        {
            image: 'christophschulz.png',
            name: 'Christoph Schulz',
            title: 'Environmental Scientist, Author & Blogger | Founder of CareElite',
            bio: 'Founder of CareElite | www.careelite.de',
            story: 'Christoph Schulz aims to raise awareness of nature\'s uniqueness and current ecological issues through his blog. He provides everyday tips, tools, and answers to sustainability questions, covering topics from zero waste and plant-based nutrition to fashion and minimalism. After encountering extensive plastic waste during a backpacking trip in Sri Lanka, Schulz realized the need to actively contribute to environmental solutions. Upon returning to Germany, he analyzed his waste and sought alternatives to single-use plastics. He also founded his blog and the CleanUp community on Facebook, which now includes over 5,000 global members dedicated to collecting trash from nature.',
            tips: [
                'Fly as rarely as possible ~ The airplane is the most climate-damaging means of transport. Flights emit large amounts of the greenhouse gas CO2, which at high altitudes has an even greater climate-damaging effect than the exhaust gasses on the ground. Whenever possible, you should therefore try to switch to sustainable alternatives. Domestic flights in particular can be replaced by the train in an environmentally friendly way.',
                'Pack as little as possible ~ The more things you take with you, the harder it will be for you to travel sustainably. If you have a lot of luggage, you will not only increase the fuel consumption of your chosen means of transport, but you will also be much less flexible with your luggage throughout the entire trip. So think minimalistically and only take as many things with you as you really need.'
            ]
        },
        {
            image: 'rolandstreicher.jpg',
            name: 'Roland Streicher',
            title: 'Owner of ReNatour',
            bio: 'Founder and Owner of ReNatour | www.renatour.de',
            story: 'ReNatour exemplifies sustainable tourism in its purest form. Since its founding in 1994, the focus has been on the sustainability of travel and experiencing nature. As an alternative tour operator specializing in family holidays, ReNatour has embraced the goals of sustainable tourism from the start and has internalized the values of sustainability. Their certification as a CSR-certified tour operator, mission statement, sustainability report, and involvement in the forum anders reisen and the atmosfair initiative—where they contributed significantly as a founding member—are all reflections of this commitment.',
            tips: [
                'Prioritize nature and sustainability ~ ReNatour ensures that all trips maintain a strong connection to nature, selecting accommodations that support eco-friendly practices. Many properties feature solar panels or follow ecological building principles. To reduce travel distances, ReNatour focuses on European destinations and promotes public transport options like trains and buses. They offer rail travel discounts and provide CO2 offset options through atmosfair for necessary flights.',
                'Choose accommodations that blend with the landscape ~ ReNatour selects places that are typical of the country and integrate well with their surroundings. They favor small, personal accommodations like farms, restored country houses, and organic hotels. ReNatour prioritizes a healthy diet featuring local, fresh, and organic products, with vegetarian options available on request. Self-catering stays often offer the chance to buy organic farm products.'
            ]
        }
    ],
    Sweden: [
        {
            image: 'kerstinnilsson.png',
            name: 'Kerstin Nilsson',
            title: 'Sustainable Travel Blogger',
            bio: 'Sustainable Travel Blogger | www.ofelas.se',
            story: 'Kerstin Nilsson, along with her partner Matti Blind-Berg, runs Ofelaš Islandshästar & Guide Service, a company deeply rooted in the traditions and landscapes of the Sami people in northern Sweden. Kerstin and Matti both have Sami heritage and aim to incorporate their cultural heritage into their business. They offer guided tours on Icelandic horses, which are suitable for various levels of riding experience. The tours range from a few hours to several days and often include elements of Sami culture, such as traditional food and storytelling.',
            tips: [
                'Minimize Waste: To contribute to environmental conservation and reduce your carbon footprint, bring reusable items such as water bottles, shopping bags, and containers. By choosing reusable over single-use plastics, you not only cut down on waste but also help conserve resources and energy. Opt for items made from sustainable materials and ensure that they are well-maintained and cleaned regularly. Additionally, consider investing in reusable utensils and straws, and be mindful of your overall consumption to make a significant positive impact on the environment.',
                'Reduce Energy Consumption: Take proactive steps to lower your energy usage by turning off lights, air conditioning, and other electrical devices when they’re not in use. This simple habit can significantly reduce your energy consumption and lower your utility bills. Consider using energy-efficient appliances and light bulbs to further decrease your energy footprint. When choosing accommodations, look for options that utilize renewable energy sources such as solar or wind power. These green energy solutions not only help reduce greenhouse gas emissions but also promote sustainability. By adopting these practices, you contribute to a healthier planet and encourage the adoption of clean energy alternatives.'
            ]
        },
        {
            image: 'mattiholmgren.jpg',
            name: 'Matti Holmgren',
            title: 'Eco-Adventure Tour Guide',
            bio: 'Eco-Adventure Tour Guide | www.ecoadventures.se',
            story: 'Matti Holmgren is a prominent Swedish environmental advocate and sustainability expert renowned for his dedication to promoting sustainable living and environmental conservation. With a focus on both practical actions and broader policy initiatives, Holmgren has been deeply involved in a range of projects aimed at reducing environmental impact. His work spans from raising public awareness about critical ecological issues to driving policy changes that support sustainability. Holmgren is known for his ability to translate complex environmental concepts into actionable advice for individuals and organizations. He emphasizes the importance of adopting sustainable practices in daily life, such as reducing waste, conserving energy, and managing water use effectively. Through his advocacy, he encourages a shift towards more environmentally friendly behaviors and supports the development of policies that promote long-term ecological health.',
            tips: [
                'Water Conservation: Implementing water-saving practices is crucial for preserving this vital resource. Start by installing water-efficient fixtures such as low-flow showerheads, faucets, and toilets to reduce water consumption. Regularly check for and promptly repair any leaks in pipes, faucets, or toilets to prevent waste. Be mindful of your water use in daily activities; for example, turn off the tap while brushing your teeth, and only run dishwashers and washing machines with full loads. Additionally, consider using a broom instead of a hose to clean driveways and sidewalks, and collect rainwater for watering plants. By adopting these water-saving strategies, you contribute to conservation efforts and help ensure a sustainable water supply for future generations.',
                'Gardening and Green Spaces: Engaging in gardening and supporting the development of green spaces can have a profound impact on both the environment and community well-being. Planting trees and creating gardens not only beautify your surroundings but also play a critical role in improving air quality by absorbing pollutants and producing oxygen. Additionally, green spaces provide essential habitats for wildlife, supporting biodiversity and creating natural corridors for various species.Incorporating native plants into your garden can further enhance local ecosystems, as these plants are adapted to the local environment and provide food and shelter for native wildlife.'
            ]
        }
    ],
    Spain: [
        {
            image: 'pagonadal.jpg',
            name: 'Paco Nadal',
            title: 'Environmental Scientist, Author & Blogger | Founder of CareElite',
            bio: 'Sustainable Travel Advocate | Travel blogger',
            story: 'Paco Nadal is a distinguished Spanish journalist and travel writer known for his advocacy of sustainable and responsible travel. With a wealth of experience in the travel industry, Nadal emphasizes the importance of eco-friendly travel practices through his articles and social media platforms. His work often highlights the need for travelers to minimize their environmental impact and embrace practices that respect local cultures and ecosystems. By sharing his insights and experiences, Nadal helps to promote a more conscientious approach to travel, encouraging others to make informed choices that contribute to the preservation of destinations and the well-being of local communities.',
            tips: [
                'Paco Nadal frequently recommends staying in eco-friendly accommodations that prioritize sustainability. These establishments often employ practices such as utilizing renewable energy sources, minimizing waste through recycling and composting programs, and supporting local communities by sourcing products and services locally.',
                'Paco Nadal advocates for exploring off-the-beaten-path destinations as a way to reduce the impact on over-touristed areas and to uncover unique, authentic experiences. By venturing to less-visited locations, travelers can help alleviate the pressure on popular hotspots, which often face issues like overcrowding and environmental degradation.'
            ]
        },
        {
            image: 'gonzalez.png',
            name: 'Alberto González',
            title: 'Owner of ReNatour',
            bio: 'Travel | Blogger',
            story: 'Alberto González is a passionate Spanish travel blogger who runs the widely-followed blog "Viajar con Sentido" (Travel with Meaning). His blog is dedicated to promoting sustainable travel practices and helping travelers make environmentally conscious choices. With a focus on reducing carbon footprints and supporting eco-friendly destinations, Alberto offers insightful tips and advice on how to travel responsibly. Through his engaging content, he aims to inspire his readers to explore the world in a way that preserves it for future generations. Alberto’s commitment to sustainability extends beyond mere travel advice; he actively seeks out and highlights destinations and accommodations that prioritize environmental stewardship, making "Viajar con Sentido" a valuable resource for anyone looking to travel with a conscience.',
            tips: [
                'Travel with a Purpose: Engage in activities that contribute positively to the destinations you visit. This can include participating in local conservation projects, volunteering with community organizations, or supporting initiatives that promote environmental and cultural sustainability. By immersing yourself in these meaningful experiences, you not only enrich your own journey but also help make a positive impact on the places you explore.',
                'Reduce, Reuse, Recycle: Embrace the principles of minimizing waste by reducing, reusing, and recycling. Carry a reusable water bottle to stay hydrated without creating plastic waste, bring along shopping bags to avoid single-use plastic, and use containers to store food or other items. By incorporating these practices into your travel routine, you can significantly reduce your environmental footprint and contribute to a more sustainable way of living.'
            ]
        }
    ],
    Greece: [
        {
            name: 'Giorgos Koutsoumbas',
            title: 'Environmental Scientist, Author & Blogger | Founder of CareElite',
            bio: 'Founder of Green Greece | eco-friendly travel educator',
            story: 'Giorgos Koutsoumbas is an environmentalist and the founder of "Green Greece," an eco-tourism company dedicated to promoting sustainable travel practices throughout Greece. His company offers eco-friendly travel experiences that highlight the beauty of Greece while encouraging visitors to minimize their carbon footprint. Through initiatives that focus on environmental conservation and responsible tourism, Koutsoumbas aims to foster a deeper connection between travelers and the natural world, ensuring that tourism benefits both the environment and local communities.',
            tips: [
                'Eco-Friendly Accommodations: When selecting a place to stay, opt for accommodations that hold green certifications or are recognized for their commitment to eco-friendly practices. Look for hotels and lodges that implement energy-saving measures, such as solar power or energy-efficient lighting, and have robust waste reduction programs that include recycling and composting. Additionally, consider properties that practice sustainable sourcing by using locally produced goods and minimizing single-use plastics. Choosing such accommodations not only supports environmental conservation but also helps promote sustainable practices within the hospitality industry.',
                'Local and Sustainable Eating: Support local farmers and businesses by dining at restaurants that prioritize sourcing their ingredients locally and sustainably. Such establishments often use fresh, seasonal produce and support regional agriculture, which can reduce the environmental impact associated with transporting food over long distances. By choosing restaurants that emphasize local and sustainable practices, you contribute to the local economy and promote responsible food production.'
            ]
        },
        {
            name: 'Yannis Papageorgiou',
            title: 'Owner of ReNatour',
            bio: 'Eco Friendly Traveler',
            story: 'One notable individual from Greece who has embraced sustainable travel practices is Yannis Papageorgiou. Through his website, Sustainable Travel Greece, Yannis is dedicated to promoting eco-friendly travel within Greece. His site offers a wealth of practical advice on how to explore Greece in a sustainable manner, including tips on minimizing environmental impact, supporting local communities, and choosing eco-friendly accommodations and activities. Yannis\'s efforts help travelers make more conscious decisions, ensuring that their adventures in Greece contribute positively to the environment and local culture.',
            tips: [
                'Choose Sustainable Activities: Opt for eco-friendly tours and activities that prioritize environmental and social responsibility. Engage in wildlife watching with operators who adhere to ethical practices, ensuring minimal disruption to animals and their habitats. Consider visiting conservation projects where you can learn about and support efforts to protect natural resources.',
                'Use Local Transportation: Many Greek cities offer bike rental services and efficient public transportation options, making it easy to travel sustainably. Opting for these modes of transport helps reduce your carbon footprint and allows you to experience the local culture in a more authentic way. Biking and public transit not only minimize environmental impact but also offer a unique perspective on the city’s daily life and attractions.'
            ]
        }
    ],
    Netherlands: [
        {
            name: 'Jade and James',
            title: 'Co Friendly Travel Blogger| Owner of The Orange Backpack',
            bio: 'Co Friendly Travel Blogger| Owner of The Orange Backpack',
            story: 'Jade and James are a Dutch couple with a deep passion for sustainable and responsible travel. They share their adventures and eco-friendly travel tips on their blog, inspiring others to travel mindfully and reduce their environmental impact. Through their writing, they provide practical advice on how to minimize waste, conserve energy, and support local communities while exploring the world. Jade and James\'s dedication to promoting eco-conscious travel practices helps raise awareness about the importance of protecting our planet and encourages travelers to make more sustainable choices.',
            tips: [
                'Support Local Businesses: Jade and James emphasize the importance of supporting local economies by dining at locally-owned restaurants, shopping at local markets, and choosing tour operators that hire local guides. By patronizing local businesses, travelers can contribute to the economic well-being of the communities they visit, ensuring that more of their spending stays within the local economy. ',
                'Offset Carbon Emissions: For the unavoidable flights they take, Jade and James offset their carbon emissions by investing in renewable energy projects or tree-planting initiatives. By supporting these efforts, they help mitigate the environmental impact of air travel and contribute to the development of sustainable energy sources and reforestation. They encourage other travelers to adopt similar practices, highlighting that carbon offsetting is a practical step towards reducing one\'s overall carbon footprint.'
            ]
        },
        {
            name: 'Elisa ',
            title: 'Owner of ReNatour',
            bio: 'Travel blogger | Founder of eattravellife',
            story: 'Elisa is a Dutch travel blogger who specializes in sustainable travel and living. She provides practical tips on how to minimize your carbon footprint while traveling and promotes eco-friendly destinations and accommodations. Through her blog, Elisa aims to inspire others to adopt more sustainable travel practices and make environmentally conscious choices that contribute to the preservation of our planet.',
            tips: [
                'Education and Awareness: Elisa believes in the power of education to drive sustainable change. She emphasizes the importance of educating herself and others about the environmental and social impacts of travel. By staying informed about sustainable practices and sharing this knowledge with fellow travelers, Elisa aims to foster a community of responsible and conscientious travelers. She encourages everyone to learn about the local culture, environment, and best practices for minimizing their impact, ensuring that their travels are respectful and beneficial to the destinations they visit.',
                'Conserve Water and Energy: Elisa suggests simple yet effective actions to conserve resources during travel. She advocates for taking shorter showers, reusing towels, and turning off lights and air conditioning when they are not in use. These small steps can significantly reduce water and energy consumption, helping to protect the environment.'
            ]
        }
    ]
    
};

// Function to update traveler information
function updateEcoAccounts(country) {
    const travelers = travelersData[country] || [];
    const traveler1 = travelers[0] || {};
    const traveler2 = travelers[1] || {};

    // Update traveler 1
    document.getElementById('traveler1-box').style.backgroundImage = `url('${traveler1.image || 'default.jpg'}')`;
    document.getElementById('traveler1-name').textContent = traveler1.name || 'Traveler 1';
    document.getElementById('traveler1-title').textContent = traveler1.name;
    document.getElementById('traveler1-bio').textContent = traveler1.bio;
    document.getElementById('traveler1-story').textContent = traveler1.story;
    document.getElementById('traveler1-tips').textContent = traveler1.tips;

    // Update traveler 2
    document.getElementById('traveler2-box').style.backgroundImage = `url('${traveler2.image || 'default.jpg'}')`;
    document.getElementById('traveler2-name').textContent = traveler2.name || 'Traveler 2';
    document.getElementById('traveler2-title').textContent = traveler2.name;
    document.getElementById('traveler2-bio').textContent = traveler2.bio;
    document.getElementById('traveler2-story').textContent = traveler2.story;
    document.getElementById('traveler2-tips').textContent = traveler2.tips;
}

document.addEventListener("DOMContentLoaded", function() {
    const traveler1Box = document.getElementById("traveler1-box");
    const traveler2Box = document.getElementById("traveler2-box");
    const backButton = document.getElementById("back-button");
    const traveler1Title = document.getElementById("traveler1-title");
    const traveler2Title = document.getElementById('traveler2-title');
    const traveler1Bio = document.getElementById('traveler1-bio');
    const traveler2Bio = document.getElementById('traveler2-bio');
    const story = document.getElementById('storyText');
    const tips = document.getElementById('tipsText');
    const traveler1Story = document.getElementById('traveler1-story');
    const traveler2Story = document.getElementById('traveler2-story');
    const traveler1Tips = document.getElementById('traveler1-tips');
    const traveler2Tips = document.getElementById('traveler2-tips');



   
   

    // Function to show the traveler boxes
    function backButtonActivate() {
        traveler1Box.style.display = "block";
        traveler2Box.style.display = "block";
        backButton.style.display = "none"; 
        traveler1Title.style.display = "none";
        traveler2Title.style.display = "none";
        traveler1Bio.style.display = "none";
        traveler2Bio.style.display = "none";
        tips.style.display = "none";
        story.style.display = "none";
        traveler1Story.style.display = "none";
        traveler2Story.style.display = "none";
        traveler1Tips.style.display = "none";
        traveler2Tips.style.display = "none";
    }

    function traveler1BoxActivate(){
        traveler1Box.style.display = "none";
        traveler2Box.style.display = "none";
        backButton.style.display = "block"; 
        traveler1Title.style.display = "block";
        traveler2Title.style.display = "none";
        traveler1Bio.style.display = "block";
        traveler2Bio.style.display = "none";
        tips.style.display = "block";
        story.style.display = "block";
        traveler1Story.style.display = "block";
        traveler2Story.style.display = "none";
        traveler1Tips.style.display = "block";
        traveler2Tips.style.display = "none";
    }

    function traveler2BoxActivate(){
        traveler1Box.style.display = "none";
        traveler2Box.style.display = "none";
        backButton.style.display = "block"; 
        traveler1Title.style.display = "none";
        traveler2Title.style.display = "block";
        traveler1Bio.style.display = "none";
        traveler2Bio.style.display = "block";
        tips.style.display = "block";
        story.style.display = "block";
        traveler1Story.style.display = "none";
        traveler2Story.style.display = "block";
        traveler1Tips.style.display = "none";
        traveler2Tips.style.display = "block";
    }

    

   

    traveler1Box.addEventListener("click", traveler1BoxActivate);
    traveler2Box.addEventListener("click", traveler2BoxActivate);

   
    backButton.addEventListener("click", backButtonActivate);
});
