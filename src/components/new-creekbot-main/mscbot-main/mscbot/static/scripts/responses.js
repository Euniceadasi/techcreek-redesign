function getBotResponse(input) {
    //Main Responses
    if (input == "what is techcreek") {
        return "TechCreek is a habitat for the teeming population of youths making sense of their lives with their digital skills and competencies, and actively involved in the development of the ‘new economy’ from Rivers State.";
    } else if (input == "what is it all about") {
        return "We provide avenues for continuous development for learners to acquire new skills and practical competences to meet the ever evolving needs of mankind. Explore our training programs for different categories of learners.";
    } else if (input == "wetin be techcreek") {
        return "TechCreek na place where we dey train youths way wan make their future bright, we dey empower them with computer skills wey big big companies dey rush, and we also dey add them for the tech matter wey concern Rivers State ";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there! I'm Henry the Creek's Bot";
    } else if (input == "Hello") {
        return "Hello there!";
    } 
    
    
    
    else if (input == "how are you") {
        return "Hello, I'm doing great, I hope you are good";
    }
    else if (input == "how are you?") {
        return "Hello, I'm doing great, I hope you are good";
    }
    else if (input == "I'm fine") {
        return "Okay, Nice to know!";
    }
    else if (input == "after the program, what next?") {
        return "You sit for the certificate examinations, get your certificate and reference letters, then Internship.";
    }
    else if (input == "How long is the program?") {
        return "It runs for 3 months.";
    }
    else if (input == "Thanks,Love you Henry!") {
        return "You're welcome, Kisses!";
    }
    else if (input == "How much is the program") {
        return "For one-time payment=#50,000 while intallmental payments is #20,000 monthly for the 3 months.";
    }
    else if (input == "How much is the program?") {
        return "For one-time payment=#50,000 while intallmental payments is #20,000 monthly for the 3 months.";
    }
    else if (input == "Hello Henry") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }else if (input == "what are your programs"){
        return "Coding, Game Development, CyberSecurity, Animations, Database Management, UiUx/Graphics Designing, Photography";
    }
     else {
        return "Ooops, I don't know the answer to that at the moment, please contact the frontdesk office or Try asking something else!";
    } 
    

}
