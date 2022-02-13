# How to Handle Common Issues
## What to do when students are behind
Student is #1, be kind, be nice, patient. **Always** assume best effort and good intentions.

## Reasons why a student might be behind:
1. Not enough time to follow course material (life happens)
2. Spending time but still struggling with material
3. Not good at using computer (can't open files, resize windows, keyboard shortcuts, can't google, typing)

## Diagnosing Students Who are Behind
Every interaction with a student is a chance to evaluate their level of understanding. THis doesn't mean testing them, but be aware of how the student answers a question or the way they speak about a topic. This can say a lot about what level they are at.

Read the pull request submissions for each project. Look for students who gave a low scores or spent a lot of time on the submission.

DM the student on Slack to check up on them and ask them how they are feeling about their progress in the course.

**Anytime a student gives a 1 score in the pull request submission send them a Slack DM to check in on them**. A 1 score may mean that they are behind in the course, but it also may mean they are   doing OK, but don't feel good about their progress. Either way, checking in on the student will be helpful to them.

During pairing sessions ask them clarifying questions about the code they are writing. (If they are the driver). Are they able to demonstrate knowledge about how the code they are writing works? Do their answers reveal any misconceptions about how their code works?

## Issues Pairing Students
Because pairing is such a central part of the RA Basics student experience, we should attempt to optimize the experience where possible.

### Webcam

Be strict about telling the students they must have their webcam on during pairing (this also applies to the group session as well). Some rare students may have extenuating circumstances, but in general, in order to do Basics, you ***must*** have a working webcam. This is so that students engage with each other as much as possible. Someone who does not have their camera on is giving a worse experience to the others.

### What to do if students are late / missing.

Don't place students into a room together suddenly. Try to prioritize the pairing of those who have arrived on time, regardless of the day's pairing order.

### What to do if a student has not gone through the pre-class material.

We want to avoid the case where one person has zero idea about the topic or how to move forward with the exercise. If possible, don't place those students into a room with someone who has reviewed the material, as that would penalize someone who was properly prepared.

### What to do if a student is alone

It can be common to have a student by themselves every session. Try to check in with that person at the beginning of the pairing to see if they reviewed the material and or if they are stuck on anything. Ask them to share their screen so you can see what they are working on like a normal pairing session. Don't put people in groups of three as that doesn't tend to work well for coding.

For the review part of each project it can be appropriate for three people to discuss each other's code. After discussion is over, move the third person to their own room.

## Breaking Social Rules

Sometimes pairs won't get along, or one of the students is not being collaborative. (rather than the more serious social rules where someone is actively making the other person uncomfortable)

This behavior can surface in different ways:

- Student is telling the other person what to type but not why.
- One person is the navigator but is not saying anything for long stretches of time.
- One person is correcting the other but not giving any context to why.

As the section leader / instructor / facilitator it is your job to negotiate this situation gently and suggest to both people that you observed ***x*** dynamic (don't name or blame anyone) and that the pairing session is optimal if it is fully collaborative. Try to give some specific direction that will be helpful (*when you say what to do next also try to explain the reasons why we should do it*)

# How to Help Students FAQ

These are some common genres of questions from students.

**Q: I don't know how to start.** 

A: When the student starts a question or project they can sometimes get stuck before even starting. There are 3 things that will help them move forward.

1. Ask them to relate the current ask to something they've seen before. Try to get them to draw the connections between what they have seen and what they need to do. (*This question is asking about names of cats, what **data structure** did we see that has groups or lists of things?*)
2. Ask them to write *any* code. Create a plan together that has them write some very small bit of code that they can start with. Stay with them until they see that it runs without errors. (*Ok, just to get started let's put a random number in the grey box*)
3. Ask them to write pseudo code that describes what needs to happen. If they are still stuck ask them to write low-level pseudo code with 1:1 pseudo code instruction line to one line of code they will write.

**Q: I don't know what to do next.**

A: The way to move students forward from this question usually has two approaches:

1. The student doesn't have a clear idea about what procedure to code next.
    
    The student knows they need to implement some larger feature but doesn't understand how it will fit in with their current code, or doesn't fully understand what's being asked.
    
    It could be that they are feeling overwhelmed with all the possible things that they think needs to happen, or they are not sure where it goes.
    
    Try to ask them to open a new VS Code window and write some pseudo code for what they want to do. Have them slowly explain each step. If possible have them write low-level pseudo code that is very descriptive about the procedure they want to do. (e.g., *ok, after you deal the cards, what happens next?*)
    
2. The student has written some code but doesn't know how to take their current code and add onto it (or perhaps in the case of an error, what to take out)
    
    Similar to debugging, asking them questions about their code should lead to the part of the code where they want to add onto from. Try to ask them questions about where that code is within the flow (rather than line number). Ask them to console.log if it helps them figure out where to hook into their current code. (e.g., *ok, where do you have your total card score? Let's console log that value*)
    

**Q: I have this error when I do this.**

A: The student is trying to describe the symptom of a problem by the action they do to invoke the error. In order to solve the error the actual cause must be found. Ask the student to console log values backwards from where they see the error. Before solving the error, first diagnose what the problem is with them. Do not try to solve the error right away. (Ok, if this is where the error is, is it this variable value that's causing the problem? What value is it when you have the error? Let's console log).

**Q: I think there's a problem with my array.**

A: Sometimes a student will ask about an error in their program without giving context to the problem they are having. Before solving their error, first ask them to be specific and articulate exactly what their problem is. Try to wait to answer their question until they have clearly articulated what is wrong, even if you were able to interpret what they meant to say.

The student may also have made a wrong assumption about the cause of a problem. Ask them to zoom out and describe the symptom of the problem they are seeing first.

Ask the student to work backwards from the symptom of the problem, even if it may be clear the problem is further back in the code. 

**Q: I don't know how to approach this.**

A: The student is stuck on some aspect of the problem, and doesn't know how to move forward. A common problem is that they understand the problem well enough but don't know how to translate the problem into code.

First, get them to write detailed pseudo code for what they want to do. For a more experienced coder this is where we begin to understand the code structures and syntax we want to use. For a student we want to help them make these connections after they are done writing the pseudo code. (*I see you wrote, add to the list here, what would that translate to in code?*)