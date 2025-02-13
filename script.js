// script.js
document.addEventListener("DOMContentLoaded", () => {
    const preloadedData = {
       "What is TahirGPT": "TahirGPT is an AI chatbot developed by Tahir Naseer.",
"Who is Owais Chouhan": "Owais Chouhan is the father of Owais- ChatBot, he developed Owais-ChatBot and Now, he is a student at Baba Ghulam Shah Badshah University Rajouri. Currently he is doing a B-Tech in IT. he works on Several College Projects are Tac-Tac-Toe, Scientific Calculator, Weather App, Login Page, Cleanliness, Snake Game, Tube light, Etc.. and he Currently learning Data Structure using C++ & Oops using Java. and his language skills are Html, CSS, JavaScript, C, C++, and now he is studying Java.",
       "Who is Tahir Naseer": "Tahir Naseer is a passionate software engineer and cybersecurity professional based in India. He actively works on several coding projects and has showcased his work on GitHub. His repositories include projects like a Tic-Tac-Toe game, Scientific Calculator,Password Generator,Tube Light, a Snake Game & Owner of TahirGPT AI Chatbot and engaging in learning activities related to coding and problem-solving, where he implements interactive features using HTML, CSS, and JavaScript, C, C++, Python, C#, Java and Git.He is currently enhancing his skills in Data Structures and Algorithms with C, as well as object-oriented programming using C++",
        "What degree are you pursuing, Tahir?": "Tahir is pursuing a Computer Science Engineering degree at Baba Ghulam Shah Badshah University (BGSBU).",
        "Which university are you studying at?": "Tahir is studying at Baba Ghulam Shah Badshah University (BGSBU).",
        "What is your field of study, Tahir?": "Tahir is studying Computer Science Engineering.",
        "When did you start your degree program?": "Tahir started his Computer Science Engineering degree in 2023.",
        "When will you complete your degree?": "Tahir will complete his degree in 2027.",
        "What is the duration of your degree program?": "The duration of Tahir's degree program is 4 years, from 2023 to 2027.",
        "What is your major?": "Tahir's major is Computer Science Engineering.",
        "Why did you choose Computer Science Engineering?": "Tahir chose Computer Science Engineering because of his strong interest in technology, coding, and problem-solving.",
        "What is your favorite programming language?": "Tahir enjoys working with JavaScript, Python, and C++.",
        "What do you plan to do after completing your degree?": "After completing his degree, Tahir plans to pursue a career in software development or AI/ML.",
        "What are your career aspirations, Tahir?": "Tahir's career aspiration is to work in the field of software development and contribute to innovative technologies.",
        "What are your hobbies, Tahir?": "Tahir's hobbies include coding, reading tech blogs, and exploring emerging technologies.",
        "What are you most excited about in your degree?": "Tahir is most excited about learning advanced programming techniques and understanding AI and machine learning.",
        "How do you spend your free time, Tahir?": "Tahir spends his free time coding, reading about new technologies, and watching tech tutorials.",
        "What motivates you to pursue a career in Computer Science?": "Tahir is motivated by the potential of technology to solve real-world problems and make a positive impact on society.",
        "What project are you working on, Tahir?": "Tahir is working on a biometric attendance system for students at Baba Ghulam Shah Badshah University.",
        "What skills are you developing during your degree?": "During his degree, Tahir is developing skills in software development, AI, machine learning, and data structures.",
        "What are your goals during your time at BGSBU?": "Tahir's goals are to gain deep knowledge in Computer Science, work on real-world projects, and build a solid foundation for his future career.",
        "What do you want to achieve by the end of your degree?": "By the end of his degree, Tahir aims to have a strong portfolio of projects and a deep understanding of computer science concepts to kickstart his professional career.",
      
       "What is JavaScript": "JavaScript is a programming language for interactive web development.",
        "What is ChatGPT": "ChatGPT is an AI chatbot developed by OpenAI.",
        "What is JavaScript": "JavaScript is a programming language for interactive web development.",
        "What is HTML": "HTML stands for HyperText Markup Language, used to structure web pages.",
        "What is CSS": "CSS stands for Cascading Style Sheets and is used to style HTML content.",
        "What is AI": "AI stands for Artificial Intelligence, which simulates human intelligence in machines.",
        "What is Python": "Python is a high-level programming language known for its simplicity and versatility.",
        "What is an API": "API stands for Application Programming Interface, a set of functions for software communication.",
        "What is a database": "A database is an organized collection of data for easy access, management, and storage.",
        "What is a cloud service?": "Cloud services provide computing resources over the internet.",
        "What is an algorithm?": "An algorithm is a set of instructions for solving problems or performing tasks.",
        "What is cybersecurity?": "Cybersecurity is the practice of protecting systems and data from digital threats.",
        "What is encryption?": "Encryption is a method to secure data by converting it into unreadable formats.",
        "What is machine learning?": "Machine learning is a subset of AI where computers learn from data without explicit programming.",
        "What is deep learning?": "Deep learning is a type of machine learning using neural networks for complex data analysis.",
        "What is the Internet of Things (IoT)?": "IoT refers to interconnected devices that communicate over the internet.",
        "What is blockchain?": "Blockchain is a decentralized digital ledger technology used for secure data recording.",
        "What is Bitcoin?": "Bitcoin is a cryptocurrency based on blockchain technology.",
        "What is a programming language?": "A programming language is a formal way to communicate instructions to a computer.",
        "What is Git?": "Git is a version control system to track code changes and collaborate on software projects.",
        "What is GitHub?": "GitHub is a platform for hosting, version control, and collaboration using Git.",
        "What is an IDE?": "IDE stands for Integrated Development Environment, a tool for software development.",
        "What is a compiler?": "A compiler translates source code into machine-readable instructions.",
        "What is open-source software?": "Open-source software has source code available for public modification and sharing.",
        "What is an operating system?": "An operating system is software that manages computer hardware and software resources.",
        "What is Linux?": "Linux is an open-source operating system known for its stability and security.",
        "What is Windows?": "Windows is a series of operating systems developed by Microsoft.",
        "What is macOS?": "macOS is the operating system developed by Apple for Mac computers.",
        "What is HTTP?": "HTTP stands for HyperText Transfer Protocol, used for transferring web data.",
        "What is HTTPS?": "HTTPS is the secure version of HTTP, using encryption to protect data.",
        "What is a URL?": "A URL (Uniform Resource Locator) specifies the address of a resource on the internet.",
        "What is a domain name?": "A domain name is a human-readable address for accessing websites.",
        "What is a browser?": "A browser is software for accessing and viewing websites.",
        "What is Google Chrome?": "Google Chrome is a fast and popular web browser developed by Google.",
        "What is Edge?": "Microsoft Edge is a browser developed by Microsoft as the successor to Internet Explorer.",
        "What is Safari?": "Safari is Apple's web browser for macOS and iOS devices.",
        "What is email?": "Email is an electronic way to send messages over the internet.",
        "What is cloud computing?": "Cloud computing delivers on-demand computing services over the internet.",
        "What is virtual reality?": "Virtual reality is a simulated experience created using computer technology.",
        "What is augmented reality?": "Augmented reality overlays digital elements on the real world.",
        "What is 5G?": "5G is the fifth-generation wireless technology for faster mobile networks.",
        "What is a server?": "A server is a computer system that provides services to other computers on a network.",
        "What is a client?": "A client is a computer that accesses services provided by a server.",
        "What is a firewall?": "A firewall is a network security system that monitors and controls incoming and outgoing traffic.",
        "What is a router?": "A router directs data packets between computer networks.",
        "What is Wi-Fi?": "Wi-Fi is a wireless networking technology that allows devices to connect to the internet.",
        "What is Bluetooth?": "Bluetooth is a wireless technology for exchanging data over short distances.",
        "What is a QR code?": "A QR code is a two-dimensional barcode that stores information.",
        "What is a chatbot?": "A chatbot is a software application that simulates human conversation.",
        "What is SaaS?": "SaaS stands for Software as a Service, software delivered via the internet.",
        "What is PaaS?": "PaaS stands for Platform as a Service, providing a platform for software development.",
        "What is IaaS?": "IaaS stands for Infrastructure as a Service, offering virtualized computing resources online.",
        "What is Kubernetes?": "Kubernetes is an open-source platform for managing containerized applications.",
        "What is Docker?": "Docker is a tool for creating and managing application containers.",
        "What is virtualization?": "Virtualization creates virtual versions of physical resources like servers or storage.",
        "What is DevOps?": "DevOps is a set of practices combining software development and IT operations.",
        "What is Agile?": "Agile is a project management approach focused on iterative development.",
        "What is Scrum?": "Scrum is a framework for managing complex projects using Agile principles.",
        "What is a data scientist?": "A data scientist analyzes and interprets complex data to derive insights.",
        "What is big data?": "Big data refers to large, complex datasets that require advanced tools to process.",
        "What is SQL?": "SQL stands for Structured Query Language, used for managing databases.",
        "What is NoSQL?": "NoSQL databases are non-relational and suitable for large-scale data storage.",
        "What is AI ethics?": "AI ethics focuses on the moral implications of using artificial intelligence.",
        "What is natural language processing?": "NLP is a branch of AI that enables computers to understand human language.",
        "What is reinforcement learning?": "Reinforcement learning is a machine learning approach based on rewards and penalties.",
        "What is an API key?": "An API key is a unique identifier used to authenticate requests to an API.",
        "What is a neural network?": "A neural network is a system of algorithms modeled after the human brain.",
            "What is Aadhaar?": "Aadhaar is a unique 12-digit identification number issued by the Indian government to residents of India.",
            "What is UPI?": "UPI stands for Unified Payments Interface, a real-time payment system developed by NPCI in India.",
            "What is PAN card?": "A PAN card is a Permanent Account Number used for financial and tax-related transactions in India.",
            "What is NEET?": "NEET is the National Eligibility cum Entrance Test for admission to medical courses in India.",
            "What is GST?": "GST stands for Goods and Services Tax, a unified tax system implemented in India.",
            "What is the population of India?": "As of 2024, India's population is estimated to be over 1.4 billion.",
            "What is ISRO?": "ISRO stands for the Indian Space Research Organisation, India's national space agency.",
            "What is Make in India?": "Make in India is a government initiative to encourage manufacturing in India.",
            "What is Digital India?": "Digital India is a campaign to improve online infrastructure and increase internet accessibility.",
            "What is the currency of India?": "The currency of India is the Indian Rupee (INR).",
            "What is the national bird of India?": "The national bird of India is the peacock.",
            "What is the national flower of India?": "The national flower of India is the lotus.",
            "What is the capital of India?": "The capital of India is New Delhi.",
            "What is IRCTC?": "IRCTC is the Indian Railway Catering and Tourism Corporation, managing railway bookings in India.",
            "What is PMAY?": "PMAY stands for Pradhan Mantri Awas Yojana, a housing scheme for affordable homes in India.",
            "What is Ayushman Bharat?": "Ayushman Bharat is a health scheme providing insurance to economically weaker sections in India.",
            "What is Jan Dhan Yojana?": "Jan Dhan Yojana is a financial inclusion program for affordable banking services.",
            "What is JEE?": "JEE is the Joint Entrance Examination for admission to engineering colleges in India.",
            "What is NREGA?": "NREGA is the Mahatma Gandhi National Rural Employment Guarantee Act for rural employment in India.",
            "What is FSSAI?": "FSSAI is the Food Safety and Standards Authority of India, ensuring food safety in the country.",
            "What is EPFO?": "EPFO stands for Employees' Provident Fund Organisation, managing provident funds for employees in India.",
            "What is LIC?": "LIC stands for Life Insurance Corporation, a leading insurance provider in India.",
            "What is IPO?": "IPO stands for Initial Public Offering, a process for companies to raise funds by issuing shares to the public.",
            "What is SEBI?": "SEBI stands for Securities and Exchange Board of India, regulating the securities market in India.",
            "What is RTO?": "RTO stands for Regional Transport Office, managing vehicle registration and licenses in India.",
            "What is BHIM?": "BHIM is a mobile payment app developed by NPCI based on UPI for digital transactions in India.",
            "What is FASTag?": "FASTag is a device for automatic toll collection at highway toll plazas in India.",
            "What is RTGS?": "RTGS stands for Real-Time Gross Settlement, a payment system for high-value transactions in India.",
            "What is NEFT?": "NEFT stands for National Electronic Funds Transfer, a system for transferring funds electronically in India.",
            "What is IMPS?": "IMPS stands for Immediate Payment Service, enabling instant money transfers in India.",
            "What is the Right to Information Act?": "The Right to Information Act allows citizens to request information from public authorities in India.",
            "What is Swachh Bharat Abhiyan?": "Swachh Bharat Abhiyan is a campaign for cleanliness and sanitation in India.",
            "What is the Startup India initiative?": "Startup India supports startups by providing benefits like tax exemptions and funding.",
            "What is Atmanirbhar Bharat?": "Atmanirbhar Bharat is a campaign to promote self-reliance and local manufacturing in India.",
            "What is India's literacy rate?": "As of the latest estimates, India's literacy rate is approximately 77.7%.",
            "What is Chandrayaan?": "Chandrayaan is India's lunar exploration mission series developed by ISRO.",
            "What is PSLV?": "PSLV stands for Polar Satellite Launch Vehicle, a launch vehicle developed by ISRO.",
            "What is Gaganyaan?": "Gaganyaan is India's first human spaceflight mission planned by ISRO.",
            "What is the Taj Mahal?": "The Taj Mahal is a UNESCO World Heritage Site and a symbol of love, located in Agra, India.",
            "What is the national anthem of India?": "The national anthem of India is 'Jana Gana Mana'.",
            "What is the national sport of India?": "While India has no officially declared national sport, hockey is often considered one.",
            "What is the Golden Quadrilateral?": "The Golden Quadrilateral is a highway network connecting major cities in India.",
            "What is the Indian Penal Code?": "The Indian Penal Code is the official criminal code governing law and order in India.",
            "What is the RBI?": "RBI stands for Reserve Bank of India, the central bank of the country.",
            "What is a Jan Dhan account?": "A Jan Dhan account is a no-minimum-balance savings account under the Jan Dhan Yojana.",
            "What is the Ayodhya verdict?": "The Ayodhya verdict resolved a land dispute, allowing the construction of a Ram temple in Ayodhya.",
            "What is the difference between Lok Sabha and Rajya Sabha?": "Lok Sabha is the lower house of Parliament, while Rajya Sabha is the upper house.",
            "What is the role of the President of India?": "The President is the ceremonial head of state and supreme commander of the armed forces.",
            "What is the role of the Prime Minister of India?": "The Prime Minister is the head of government and leads the executive branch.",
                "Where is Jammu & Kashmir located?": "Jammu & Kashmir is located in the northernmost part of India, sharing borders with Pakistan, China, and Himachal Pradesh.",
                "What is the history of Jammu & Kashmir?": "Jammu & Kashmir was a princely state before its accession to India in 1947 and later became a Union Territory in 2019.",
                "Why is Jammu & Kashmir famous?": "Jammu & Kashmir is famous for its scenic beauty, Dal Lake, houseboats, saffron, and rich cultural heritage.",
                "When is the best time to visit Jammu & Kashmir?": "The best time to visit is from April to October for pleasant weather and scenic beauty.",
                "How to reach Jammu & Kashmir?": "Jammu & Kashmir can be reached by air via Srinagar Airport, by train to Jammu Tawi, or by road via NH44.",
                "Who are the famous personalities from Jammu & Kashmir?": "Famous personalities include Sheikh Abdullah, Maqbool Bhat, Farooq Abdullah, and poet Habba Khatoon.",
                "Which are the main rivers in Jammu & Kashmir?": "The main rivers are the Jhelum, Chenab, Ravi, Tawi, and Indus.",
                "What is the traditional music of Jammu & Kashmir?": "Sufiana Kalam and Chakri are popular traditional music forms in Jammu & Kashmir.",
                "Why is Kashmir called 'Paradise on Earth'?": "Kashmir is called 'Paradise on Earth' due to its breathtaking landscapes, lush valleys, and serene lakes.",
                "How is the climate in Jammu & Kashmir?": "The region has a temperate climate with cold winters, pleasant summers, and heavy snowfall in some areas.",
                "What is the cultural significance of the Pheran?": "Pheran is a traditional gown worn for warmth and is an iconic symbol of Kashmiri culture.",
                "Which are the major wildlife sanctuaries in Jammu & Kashmir?": "Hemis National Park, Dachigam National Park, and Kishtwar High Altitude National Park are notable sanctuaries.",
                "Where is the Shankaracharya Temple located?": "The Shankaracharya Temple is located on Shankaracharya Hill in Srinagar, dedicated to Lord Shiva.",
                "What is the significance of saffron farming in Kashmir?": "Kashmir produces the world's finest saffron, primarily grown in Pampore, and is an important export crop.",
                "When did Jammu & Kashmir become a Union Territory?": "Jammu & Kashmir became a Union Territory on October 31, 2019.",
                "Why is Dal Lake so popular?": "Dal Lake is popular for its floating gardens, houseboats, and Shikara rides, offering a unique experience.",
                "How is the education system in Jammu & Kashmir?": "Jammu & Kashmir has notable universities like the University of Kashmir and Baba Ghulam Shah Badshah University, focusing on higher education.",
                "What is the Amarnath Cave known for?": "The Amarnath Cave is a sacred Hindu shrine dedicated to Lord Shiva, featuring a naturally forming ice lingam.",
                "Who are the Dogras?": "The Dogras are an ethnic group in Jammu, known for their rich cultural heritage and contribution to the Dogra Regiment.",
                "Which are the top tourist destinations in Jammu & Kashmir?": "Popular destinations include Srinagar, Gulmarg, Pahalgam, Sonamarg, and Jammu.",
                "What is the significance of the Chenab Valley?": "The Chenab Valley is known for its scenic beauty and the Baglihar Dam, generating hydroelectric power.",
                "Where is the Kheer Bhawani Temple?": "The Kheer Bhawani Temple, dedicated to Goddess Ragnya Devi, is located in Tulmulla, near Srinagar.",
                "How is the economy of Jammu & Kashmir?": "The economy is driven by tourism, agriculture, handicrafts, and horticulture, particularly apples and walnuts.",
                "Why is Gulmarg called the 'Meadow of Flowers'?": "Gulmarg is called the 'Meadow of Flowers' due to its lush meadows and vibrant blooms during spring and summer.",
                "What is the role of the J&K Police?": "The J&K Police is responsible for maintaining law and order and combating terrorism in the region.",
                "Which crops are grown in Jammu & Kashmir?": "Major crops include rice, maize, wheat, apples, saffron, and walnuts.",
                "When is the Tulip Festival held?": "The Tulip Festival is held in April at the Indira Gandhi Memorial Tulip Garden in Srinagar.",
                "What is the cuisine of Jammu?": "Jammu's cuisine includes Rajma Chawal, Kalari Kulcha, and Dogri dishes like Auriya and Khatta Meat.",
                "How does Jammu & Kashmir celebrate Eid?": "Eid is celebrated with prayers, festive meals, and community gatherings, especially in the Kashmir Valley.",
                "Why is the J&K Bank important?": "The J&K Bank is a leading financial institution, providing banking services and supporting the region's economy.",
                "What is the literacy rate in Jammu & Kashmir?": "The literacy rate in Jammu & Kashmir is approximately 77%.",
                "Who was Sheikh Abdullah?": "Sheikh Abdullah, also known as the 'Lion of Kashmir,' was a prominent leader and the first Prime Minister of J&K.",
                "Which fruits are famous in Kashmir?": "Apples, cherries, pears, and apricots are famous fruits from Kashmir.",
                "What is the history of the Mughal Gardens?": "The Mughal Gardens were built during the Mughal era, inspired by Persian-style gardens.",
                "Where is Bhaderwah located?": "Bhaderwah, known as 'Mini Kashmir,' is a picturesque valley in the Doda district of Jammu.",
                "How do people in Jammu & Kashmir celebrate Navroz?": "Navroz, the Persian New Year, is celebrated with prayers, feasts, and cultural performances.",
                "Why is Wazwan special in Kashmiri culture?": "Wazwan is a multi-course meal central to Kashmiri hospitality and celebrations.",
                "What are the major handicrafts of Jammu & Kashmir?": "Famous handicrafts include Pashmina shawls, Kashmiri carpets, papier-mâché, and walnut wood carvings.",
                "What is the literacy rate in Ladakh?": "The literacy rate in Ladakh is around 77%, focusing on improving education infrastructure.",
                "Who built the Vaishno Devi Shrine?": "The Vaishno Devi Shrine has ancient origins, believed to have been built by devotees over centuries.",
                "Which is the longest river in Jammu & Kashmir?": "The Jhelum River is the longest river in Jammu & Kashmir, flowing through the Kashmir Valley.",
                    "Where is Rajouri located?": "Rajouri is a district in the Jammu division of Jammu & Kashmir, located near the Line of Control (LoC).",
                    "What is Rajouri famous for?": "Rajouri is famous for its scenic beauty, historical forts, and temples like the Baba Ghulam Shah Badshah Shrine.",
                    "Who was Baba Ghulam Shah Badshah?": "Baba Ghulam Shah Badshah was a Sufi saint and his shrine in Rajouri is a popular pilgrimage site.",
                    "Why is Rajouri important in history?": "Rajouri has historical significance as it was part of the ancient Panchal kingdom and a trade route during the Mughal era.",
                    "How is the climate in Rajouri?": "Rajouri has a subtropical climate with cold winters and warm summers.",
                    "What are the main languages spoken in Rajouri?": "The main languages spoken are Gojri, Dogri, Urdu, and Kashmiri.",
                    "Which rivers flow through Rajouri?": "The Manawar Tawi River flows through Rajouri, contributing to its agricultural prosperity.",
                    "What is the literacy rate of Rajouri?": "The literacy rate of Rajouri is approximately 68%, as per the latest census.",
                    "What are the main attractions in Rajouri?": "Key attractions include Dhanidhar Fort, Shahdra Sharif, Rajouri Fort, and Thanna Mandi.",
                    "Why is Shahdra Sharif significant?": "Shahdra Sharif is a revered shrine dedicated to Baba Ghulam Shah Badshah, attracting people from all communities.",
                    "What are the primary occupations in Rajouri?": "Agriculture, livestock rearing, and government services are the primary occupations in Rajouri.",
                    "Which crops are grown in Rajouri?": "Wheat, maize, and paddy are the major crops grown in Rajouri, along with horticulture like apples and walnuts.",
                    "When is the best time to visit Rajouri?": "The best time to visit Rajouri is from March to October, when the weather is pleasant and suitable for sightseeing.",
                    "What is the cultural heritage of Rajouri?": "Rajouri has a rich cultural heritage with influences of Dogra, Kashmiri, and Pahari traditions.",
                    "How to reach Rajouri?": "Rajouri can be reached by road via NH144A, with the nearest airport in Jammu (150 km) and railway station in Jammu Tawi.",
                    "What is the population of Rajouri?": "The population of Rajouri is around 650,000, as per the latest estimates.",
                    "What is Thanna Mandi known for": "Thanna Mandi is known for its scenic landscapes and proximity to Mughal Road, connecting Poonch and Shopian.",
                    "What is the significance of Mughal Road?": "The Mughal Road is a historical route connecting Rajouri to Shopian, used by Mughal emperors for travel.",
                    "Who are the Gujjars and Bakerwals?": "Gujjars and Bakerwals are nomadic tribes in Rajouri, known for their traditional lifestyles and livestock rearing.",
                    "What is the Rajouri Day celebration?": "Rajouri Day is celebrated on April 13th to commemorate the liberation of Rajouri from tribal invaders in 1948.",
                        "Baba Ghulam Shah Badshah University": "Baba Ghulam Shah Badshah University is a public university located in Rajouri, Jammu & Kashmir, established in 2002.",
                        "Where is BGSBU located?": "The university is situated in Dhanore, Rajouri, Jammu & Kashmir, amidst the picturesque surroundings of the Pir Panjal mountain range.",
                        "Who was Baba Ghulam Shah Badshah": "Baba Ghulam Shah Badshah was a revered Sufi saint known for his teachings of peace and spirituality in the region.",
                        "What are the courses offered at BGSBU?": "The university offers undergraduate, postgraduate, and doctoral programs in engineering, management, humanities, sciences, and Islamic studies.",
                        "When was BGSBU established?": "Baba Ghulam Shah Badshah University was established in the year 2002 by the Jammu & Kashmir Legislature under Act No. XVI of 2002.",
                        "Why is BGSBU named after Baba Ghulam Shah Badshah?": "The university is named in honor of the Sufi saint Baba Ghulam Shah Badshah to reflect his legacy of promoting knowledge, harmony, and understanding.",
                        "What is the motto of BGSBU?": "The university's motto is 'Iqra Bismi Rabbik' which means 'Read in the name of your Lord,' emphasizing the pursuit of knowledge.",
                        "How is the campus of BGSBU?": "The campus is spread over a large area in the scenic Rajouri district, with modern infrastructure, libraries, hostels, and research facilities.",
                        "What are the major schools at BGSBU?": "The university has schools like the School of Engineering & Technology, School of Biosciences & Biotechnology, School of Management Studies, and School of Islamic Studies & Languages.",
                        "Which engineering courses are offered at BGSBU?": "BGSBU offers B.Tech and M.Tech programs in Civil Engineering, Electrical Engineering, Computer Science, and Information Technology.",
                        "How is the placement at BGSBU?": "The placement cell at BGSBU has facilitated job opportunities in reputed companies, with alumni working across various sectors.",
                        "What is the significance of the School of Islamic Studies at BGSBU?": "The School of Islamic Studies promotes research and education in Islamic culture, history, and languages, contributing to the preservation of the region's rich heritage.",
                        "What is the admission process for BGSBU?": "Admission is based on entrance exams conducted by the university or national-level tests like JEE, GATE, and CAT, depending on the program.",
                        "Is BGSBU recognized by UGC?": "Yes, Baba Ghulam Shah Badshah University is recognized by the University Grants Commission (UGC) of India.",
                        "What are the research opportunities at BGSBU?": "BGSBU offers Ph.D. programs in various disciplines and encourages research through its well-equipped laboratories and collaborations.",
                        "What are the notable achievements of BGSBU?": "The university has been known for its contributions to education and research in Jammu & Kashmir, particularly in engineering and biotechnology.",
                        "What is the student life like at BGSBU?": "Student life at BGSBU includes cultural activities, sports events, and academic seminars, fostering an enriching environment.",
                        "Does BGSBU provide hostel facilities?": "Yes, the university has separate hostels for boys and girls, with modern amenities and a safe environment.",
                        "What are the cultural events at BGSBU?": "The university hosts various cultural events, including the annual fest 'Gulistaan,' celebrating talent and creativity.",
                        "How to reach BGSBU?": "BGSBU is about 155 km from Jammu city, and it is well-connected by road. The nearest railway station is Jammu Tawi, and the nearest airport is Jammu Airport.",
                       
                              "What is the full form of J&K?": "Jammu and Kashmir",
                              "What is the full form of BGSBU?": "Baba Ghulam Shah Badshah University",
                              "What is the full form of LOK?": "Line of Control",
                              "What is the full form of DC?": "Deputy Commissioner",
                              "What is the full form of SP?": "Superintendent of Police",
                              "What is the full form of PDD?": "Power Development Department",
                              "What is the full form of RTI?": "Right to Information",
                              "What is the full form of GDP?": "Gross Domestic Product",
                              "What is the full form of UNESCO?": "United Nations Educational, Scientific and Cultural Organization",
                              "What is the full form of NGO?": "Non-Governmental Organization",
                              "What is the full form of MP?": "Member of Parliament",
                              "What is the full form of MLA?": "Member of Legislative Assembly",
                              "What is the full form of ATM?": "Automated Teller Machine",
                              "What is the full form of HR?": "Human Resources",
                              "What is the full form of CEO?": "Chief Executive Officer",
                              "What is the full form of COO?": "Chief Operating Officer",
                              "What is the full form of CFO?": "Chief Financial Officer",
                              "What is the full form of PM?": "Prime Minister",
                              "What is the full form of GM?": "General Manager",
                              "What is the full form of SMS?": "Short Message Service",
                              "What is the full form of URL?": "Uniform Resource Locator",
                              "What is the full form of VPN?": "Virtual Private Network",
                              "What is the full form of JCP?": "Joint Control Program",
                              "What is the full form of TSR?": "Traffic Safety Report",
                              "What is the full form of IRS?": "Indian Revenue Service",
                              "What is the full form of MNC?": "Multinational Corporation",
                              "What is the full form of USD?": "United States Dollar",
                              "What is the full form of EUR?": "Euro",
                              "What is the full form of PIN?": "Personal Identification Number",
                              "What is the full form of B2B?": "Business to Business",
                              "What is the full form of B2C?": "Business to Consumer",
                           
                              "What is the full form of UGC?": "University Grants Commission",
                              "What is the full form of NAAC?": "National Assessment and Accreditation Council",
                              "What is the full form of AICTE?": "All India Council for Technical Education",
                              "What is the full form of NET?": "National Eligibility Test",
                              "What is the full form of JEE?": "Joint Entrance Examination",
                              "What is the full form of NEET?": "National Eligibility cum Entrance Test",
                              "What is the full form of Ph.D.?": "Doctor of Philosophy",
                              "What is the full form of CBSE?": "Central Board of Secondary Education",
                              "What is the full form of GATE?": "Graduate Aptitude Test in Engineering",
                              "What is the full form of IGNOU?": "Indira Gandhi National Open University",
                              "What is the full form of ICSE?": "Indian Certificate of Secondary Education",
                              "What is the full form of ISRO?": "Indian Space Research Organisation",
                              "What is the full form of NPTEL?": "National Programme on Technology Enhanced Learning",
                              "What is the full form of IIT?": "Indian Institutes of Technology",
                              "What is the full form of IIM?": "Indian Institutes of Management",
                              "What is the full form of DCE?": "Directorate of Technical Education",
                              "What is the full form of IPU?": "Indraprastha University",
                              "What is the full form of AIIMS?": "All India Institute of Medical Sciences",
                              "What is the full form of NIT?": "National Institute of Technology",
                              "What is the full form of NCC?": "National Cadet Corps",
                              "What is the full form of B.Ed?": "Bachelor of Education",
                              "What is the full form of M.Ed?": "Master of Education",
                              "What is the full form of MBA?": "Master of Business Administration",
                              "What is the full form of MCA?": "Master of Computer Applications",
                              "What is the full form of B.Tech?": "Bachelor of Technology",
                              "What is the full form of M.Tech?": "Master of Technology",
                              "What is the full form of BBA?": "Bachelor of Business Administration",
                              "What is the full form of BCA?": "Bachelor of Computer Applications",
                              "What is the full form of PGD?": "Post Graduate Diploma",
                              "What is the full form of SLAT?": "Symbiosis Law Admission Test",
                              "What is the full form of CLAT?": "Common Law Admission Test",
                              "What is the full form of CPT?": "Common Proficiency Test",
                              "What is the full form of AIEEE?": "All India Engineering Entrance Examination",
                              "What is the full form of DSE?": "Delhi School of Economics",
                            
                              "What is the full form of HTTP?": "HyperText Transfer Protocol",
                              "What is the full form of HTML?": "HyperText Markup Language",
                              "What is the full form of CSS?": "Cascading Style Sheets",
                              "What is the full form of JSON?": "JavaScript Object Notation",
                              "What is the full form of XML?": "eXtensible Markup Language",
                              "What is the full form of API?": "Application Programming Interface",
                              "What is the full form of IP?": "Internet Protocol",
                              "What is the full form of URL?": "Uniform Resource Locator",
                              "What is the full form of RAM?": "Random Access Memory",
                              "What is the full form of CPU?": "Central Processing Unit",
                              "What is the full form of LAN?": "Local Area Network",
                              "What is the full form of WAN?": "Wide Area Network",
                              "What is the full form of SMTP?": "Simple Mail Transfer Protocol",
                              "What is the full form of POP?": "Post Office Protocol",
                              "What is the full form of IMAP?": "Internet Message Access Protocol",
                              "What is the full form of DNS?": "Domain Name System",
                              "What is the full form of FTP?": "File Transfer Protocol",
                              "What is the full form of Wi-Fi?": "Wireless Fidelity",
                              "What is the full form of 3G?": "Third Generation",
                              "What is the full form of 4G?": "Fourth Generation",
                              "What is the full form of 5G?": "Fifth Generation",
                              "What is the full form of LCD?": "Liquid Crystal Display",
                              "What is the full form of LED?": "Light Emitting Diode",
                              "What is the full form of OLED?": "Organic Light Emitting Diode",
                              "What is the full form of USB?": "Universal Serial Bus",
                              "What is the full form of SATA?": "Serial Advanced Technology Attachment",
                              "What is the full form of HDD?": "Hard Disk Drive",
                              "What is the full form of SSD?": "Solid State Drive",
                              "What is the full form of BIOS?": "Basic Input/Output System",
                              "What is the full form of GUI?": "Graphical User Interface",
                              "What is the full form of CLI?": "Command Line Interface",
                              "What is the full form of SSH?": "Secure Shell",
                              "What is the full form of AI?": "Artificial Intelligence",
                              "What is the full form of ML?": "Machine Learning",
                              "What is the full form of IoT?": "Internet of Things",
                              "What is the full form of AR?": "Augmented Reality",
                              "What is the full form of VR?": "Virtual Reality",
                              "What is the full form of MR?": "Mixed Reality",
                              "What is the full form of USB-C?": "Universal Serial Bus Type C",
                              "What is the full form of AIOS?": "Artificial Intelligence Operating System",
                              "What is the full form of DRM?": "Digital Rights Management",
                              "What is the full form of OCR?": "Optical Character Recognition",
                              "What is the full form of SDK?": "Software Development Kit",
                              "What is the full form of IDE?": "Integrated Development Environment",
                              "What is the full form of CSS3?": "Cascading Style Sheets Version 3",
                              "What is the full form of XSS?": "Cross-Site Scripting",
                              "What is the full form of SQL?": "Structured Query Language",
                              "What is the full form of NoSQL?": "Not Only SQL",
                              "What is the full form of IDE?": "Integrated Development Environment",
                              "What is the full form of IPV6?": "Internet Protocol Version 6",
                              "What is the full form of HTTP2?": "HyperText Transfer Protocol Version 2",
                              "What is the full form of AJAX?": "Asynchronous JavaScript and XML",
                              "What is the full form of UI?": "User Interface",
                              "What is the full form of UX?": "User Experience",
                              "What is the full form of PHP?": "Hypertext Preprocessor",
                              "What is the full form of JS?": "JavaScript",
                              "What is the full form of JVM?": "Java Virtual Machine",
                              "What is the full form of RDBMS?": "Relational Database Management System",
                              "What is the full form of MSSQL?": "Microsoft SQL Server",
                              "What is the full form of XML-RPC?": "XML Remote Procedure Call",
                              "What is the full form of JSON-RPC?": "JSON Remote Procedure Call",
                              "What is the full form of UML?": "Unified Modeling Language",
                              "What is the full form of VPN?": "Virtual Private Network",
                              "What is the full form of B2B?": "Business to Business",
                              "What is the full form of B2C?": "Business to Consumer",
                              "What is the full form of C2C?": "Consumer to Consumer",
                              "What is the full form of SEO?": "Search Engine Optimization",
                              "What is the full form of SEM?": "Search Engine Marketing",
                              "What is the full form of CMS?": "Content Management System",
                           
                              "What is the full form of ICU?": "Intensive Care Unit",
                              "What is the full form of OPD?": "Outpatient Department",
                              "What is the full form of CT Scan?": "Computed Tomography Scan",
                              "What is the full form of MRI?": "Magnetic Resonance Imaging",
                              "What is the full form of X-ray?": "X-radiation",
                              "What is the full form of ECG?": "Electrocardiogram",
                              "What is the full form of EEG?": "Electroencephalogram",
                              "What is the full form of BPM?": "Beats Per Minute",
                              "What is the full form of FDA?": "Food and Drug Administration",
                              "What is the full form of WHO?": "World Health Organization",
                              "What is the full form of AIDS?": "Acquired Immunodeficiency Syndrome",
                              "What is the full form of HIV?": "Human Immunodeficiency Virus",
                              "What is the full form of CVD?": "Cardiovascular Disease",
                              "What is the full form of CPR?": "Cardiopulmonary Resuscitation",
                              "What is the full form of EPI?": "Expanded Programme on Immunization",
                              "What is the full form of TB?": "Tuberculosis",
                              "What is the full form of MDR-TB?": "Multi-Drug Resistant Tuberculosis",
                              "What is the full form of SARS?": "Severe Acute Respiratory Syndrome",
                              "What is the full form of COVID-19?": "Coronavirus Disease 2019",
                              "What is the full form of PPE?": "Personal Protective Equipment",
                              "What is the full form of VIRUS?": "Vital Infectious Research Unveiling Syndrome",
                              "What is the full form of ICU?": "Intensive Care Unit",
                              "What is the full form of BLS?": "Basic Life Support",
                              "What is the full form of ALS?": "Advanced Life Support",
                              "What is the full form of NIV?": "Non-invasive Ventilation",
                              "What is the full form of RBC?": "Red Blood Cells",
                              "What is the full form of WBC?": "White Blood Cells",
                              "What is the full form of CBC?": "Complete Blood Count",
                              "What is the full form of Hemoglobin?": "Hemoglobin",
                              "What is the full form of Hematocrit?": "Hematocrit",
                              "What is the full form of Platelets?": "Platelets",
                            
                              "What is the full form of DNA?": "Deoxyribonucleic Acid",
                              "What is the full form of RNA?": "Ribonucleic Acid",
                              "What is the full form of ATP?": "Adenosine Triphosphate",
                              "What is the full form of UV?": "Ultraviolet",
                              "What is the full form of IR?": "Infrared",
                              "What is the full form of NMR?": "Nuclear Magnetic Resonance",
                              "What is the full form of LHC?": "Large Hadron Collider",
                              "What is the full form of GPS?": "Global Positioning System",
                              "What is the full form of O2?": "Oxygen",
                              "What is the full form of CO2?": "Carbon Dioxide",
                              "What is the full form of NO2?": "Nitrogen Dioxide",
                              "What is the full form of H2O?": "Water",
                              "What is the full form of H2O2?": "Hydrogen Peroxide",
                              "What is the full form of K?": "Potassium",
                              "What is the full form of NaCl?": "Sodium Chloride",
                              "What is the full form of NH3?": "Ammonia",
                              "What is the full form of N2?": "Nitrogen",
                              "What is the full form of O3?": "Ozone",
                              "Hello?": "How can I assist you today?",
                              "What’s new today?": "Not much, but I’m ready to help! What can I do for you?",
                              "Any plans for today?": "I’m here to help you with whatever you need. How can I assist you?",
                              "What can I help you with?": "Let me know what you need, and I’ll do my best to assist!",
                              "Need any help today?": "I’m ready to help! What would you like to work on today?",
                              "Got any questions?": "Feel free to ask, I’m here to help you!",
                              "How can I make your day easier?": "Just let me know how I can help, and I’ll do my best!",
                              "What’s on your mind?": "I’m here to listen and assist, what’s up?",
                              "Is there something specific you need today?": "Just let me know, and I’ll provide the help you need!",
                              "Anything I can help with today?": "Let me know if you need assistance with something!",
                              "What are you working on today?": "Feel free to share, I’d love to help if you need anything!",
                              "Can I assist with anything?": "I’m ready to assist! What can I do for you?",
                              "What do you need help with?": "I’m here to assist with anything you need!",
                              "How’s your day going?": "I’m here to help, no matter how your day is going!",
                              "What can I do for you today?": "Let me know, and I’ll get right to it!",
                              "What’s your plan for today?": "I’m here to help you with any tasks or plans you have!",
                              "Do you need any advice?": "I’d be happy to offer some advice. What do you need help with?",
                              "What’s on your to-do list today?": "Tell me what’s on your mind, and I’ll assist you with it!",
                              "How can I help you make progress today?": "I’m here to help you make progress on whatever you need!",
                              "Is there a project you're focused on?": "Let me know what you're working on, and I can help you out!",
       
  };

  const messagesContainer = document.getElementById("messages");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-btn");
  const addQAButton = document.getElementById("add-qa-btn");
  const modal = document.getElementById("add-question-modal");
  const newQuestionInput = document.getElementById("new-question");
  const newAnswerInput = document.getElementById("new-answer");
  const saveButton = document.getElementById("save-btn");
  const cancelButton = document.getElementById("cancel-btn");

  const appendMessage = (text, sender, addActions = false) => {
    const message = document.createElement("div");
    message.classList.add("message", sender);

    const textContent = document.createElement("p");
    textContent.textContent = text;

    message.appendChild(textContent);

    if (addActions && sender === "bot") {
      const actions = document.createElement("div");
      actions.classList.add("actions");

      // Add Copy Button
      const copyButton = document.createElement("button");
      copyButton.textContent = "Copy";
      copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(text).then(() => alert("Copied to clipboard!"));
      });
      actions.appendChild(copyButton);

      // Add Share Button
      const shareButton = document.createElement("button");
      shareButton.textContent = "Share";
      shareButton.addEventListener("click", () => {
        alert(`Sharing: "${text}"`); // Add custom sharing logic here.
      });
      actions.appendChild(shareButton);

      // Add Read Aloud Button
      const readButton = document.createElement("button");
      readButton.textContent = "Read Aloud";
      let isReading = false;
      let utterance;
      readButton.addEventListener("click", () => {
        if (isReading) {
          speechSynthesis.cancel();
          readButton.textContent = "Read Aloud";
          isReading = false;
        } else {
          utterance = new SpeechSynthesisUtterance(text);
          speechSynthesis.speak(utterance);
          readButton.textContent = "Stop Reading";
          isReading = true;
        }
      });
      actions.appendChild(readButton);

      message.appendChild(actions);
    }

    messagesContainer.appendChild(message);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  const handleSend = async () => {
    const userQuestion = userInput.value.trim();
    if (!userQuestion) return;

    appendMessage(userQuestion, "user");
    userInput.value = "";

    // Step 1: Check spelling
    const correctedQuery = await checkSpelling(userQuestion);
    if (correctedQuery !== userQuestion) {
      appendCorrectionOption(userQuestion, correctedQuery);
      return;
    }

    // Step 2: Search Wikipedia or preloaded data
    const response = preloadedData[userQuestion] || (await searchWikipedia(userQuestion)) || "Sorry, I don't have the answer to that. You can add it!";
    appendMessage(response, "bot", true);
  };

  const appendCorrectionOption = (original, corrected) => {
    const correctionMessage = document.createElement("div");
    correctionMessage.classList.add("correction");

    const textContent = document.createElement("p");
    textContent.textContent = `Did you mean: "${corrected}"?`;

    const correctButton = document.createElement("button");
    correctButton.textContent = "Use this";
    correctButton.addEventListener("click", () => {
      userInput.value = corrected;
      handleSend();
      correctionMessage.remove();
    });

    correctionMessage.appendChild(textContent);
    correctionMessage.appendChild(correctButton);
    messagesContainer.appendChild(correctionMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  const checkSpelling = async (text) => {
    const endpoint = `https://api.datamuse.com/words?sp=${encodeURIComponent(text)}&max=1`;
    try {
      const response = await fetch(endpoint);
      const suggestions = await response.json();
      return suggestions.length > 0 ? suggestions[0].word : text;
    } catch (error) {
      console.error("Error checking spelling:", error);
      return text;
    }
  };

  const searchWikipedia = async (query) => {
    const searchEndpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${encodeURIComponent(query)}`;
    try {
      const searchResponse = await fetch(searchEndpoint);
      const searchData = await searchResponse.json();

      if (searchData.query.search.length > 0) {
        const pageTitle = searchData.query.search[0].title;
        const contentEndpoint = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext&format=json&origin=*&titles=${encodeURIComponent(pageTitle)}`;
        const contentResponse = await fetch(contentEndpoint);
        const contentData = await contentResponse.json();

        const page = Object.values(contentData.query.pages)[0];
        if (page && page.extract) {
          return `${pageTitle}: ${page.extract}`;
        } else {
          return "Sorry, the full content for this topic could not be retrieved.";
        }
      } else {
        return "No TahirGPT results found for your query.";
      }
    } catch (error) {
      console.error("Error fetching data from TahirGPT:", error);
      return "An error occurred while searching TahirGPT. Please try again later.";
    }
  };

  sendButton.addEventListener("click", handleSend);
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSend();
  });

  addQAButton.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  saveButton.addEventListener("click", () => {
    const newQuestion = newQuestionInput.value.trim();
    const newAnswer = newAnswerInput.value.trim();

    if (newQuestion && newAnswer) {
      preloadedData[newQuestion] = newAnswer;
      appendMessage("New Q&A added successfully!", "bot");
      modal.style.display = "none";
      newQuestionInput.value = "";
      newAnswerInput.value = "";
    }
  });

  cancelButton.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

