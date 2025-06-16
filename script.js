function data()
        {
            document.getElementById("hide").style.display = "none";
            document.getElementById("demos").style.display = "none";
            document.getElementById("frst").style.display = "none";
            var name = document.getElementById("demos").value;
            document.getElementById("story").textContent= `Once upon a time, in a quiet town, there lived
             a curious young dreamer named ${name}.  One stormy night, ${name} upon an old, dusty library hidden behind a bakery.
            Inside, books whispered secrets, and a glowing door appeared at the back of the room.
             Without thinking twice, ${name} stepped through — and suddenly entered a land where clouds 
            were made of candy, and trees grew sparkling keys.

            Each key opened a new world: one with flying whales, another with talking shadows, and even
             one where time ran backward.

            But there was a rule: ${name} had to return before the library vanished at dawn. With the final
            key in hand and adventure still calling, ${name} raced back just in time.

            Now, every stormy night, ${name} returns to see what new door awaits…`;
            story.style.fontSize = "18px";
        }
    
