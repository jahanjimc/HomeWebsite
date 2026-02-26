import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const publications = [
  {
    id: 1,
    title: "Dignity of Labor",
    date: "January 20, 2026",
    content: `
    During my travels across India, I have met people from every walk of life—from the common man on the street to CEOs leading large companies. And through all these experiences, one truth has revealed itself to me again and again:

The dignity of labor is still missing in Indian society.

In many places, a person’s work becomes their identity.
Instead of being seen as a human being first, they are reduced to a job title.

A person may enter your home to cook food, and instantly they are treated only as a cook.
They are expected to remain invisible—to serve, to stay in their place, and never sit beside the employer and eat the same food.

A man working as a driver for a business owner is treated only as a driver.
He may serve a family with loyalty and dedication for years, yet still be made to feel he cannot sit at the same table, cannot eat at the same restaurant with dignity, and cannot be seen as an equal human being.

This is not culture.
This is not tradition.
This is not “how things are supposed to be.”

This is simply a lack of humanity.

Because the truth is:

What one does for a living is not who they are.
A job is a role.
A job is a responsibility.
But a human being is far greater than a job title.

And when someone feels superior to another human being, it reveals only one thing:

They are suffering inside.

And when someone feels inferior to another human being, that too reveals only one thing:

They are suffering inside.

Superiority is suffering.
Inferiority is suffering.

Both are symptoms of the same illness—a deeply divided society.

When dignity of labor is missing, it is not only a social problem.
It is a psychological problem.

It means we are living in a society that is sick—because it has forgotten the most basic truth:

Every human being deserves respect.

Sometimes this sickness even hides inside “holiness.”

A priest who believes he is a godman, who enjoys being treated as special, who encourages people to worship him and touch his feet—may appear powerful on the outside…

…but inside, he may be suffering the most.

Because true wisdom does not demand worship.
True greatness does not need people to bow down.
True spirituality creates equality—not hierarchy.

Knowing this, I have chosen to live differently.

In my home, the household workers who live with me are not treated as servants. They are treated as human beings—as family, as equals.

I tell them clearly:

“As long as you are living in this house, this house is yours.
Take full responsibility and treat it like your own home.”

They eat with me at the same table.
They eat the same food.
There is no separate plate.
No separate space.
No separate identity.

Because respect cannot be partial.
It must be complete.

Not everyone is comfortable with this. Many have been conditioned for so long to believe that “this is not allowed” or “this is not normal,” that they struggle to accept equality—even when it is offered.

But I have learned something important:

You cannot free someone who is addicted to slavery.
You cannot change a mindset that refuses to expand.

So I made a decision:

If someone cannot respect themselves enough to sit and eat with dignity, and cannot take responsibility for the home they live in, then they cannot stay with me.

I dismissed them—not out of anger, but out of clarity.

Because my house will not be a place where human beings live with fear, separation, or inequality.

My friend, who could not accept equality, went into a rage. She has been conditioned to believe she is superior and that workers are inferior.

When a worker tried to correct her double standards, her anger exploded. Her rage was intense and deeply disturbing. She attacked the worker brutally and relentlessly, even resorting to physical assault.

It was horrifying to witness—worse than any horror movie. After the outburst, she broke down emotionally and left the house.

Still, my truth remains firm:

My house and my office will be places where human beings live with dignity.

And I believe this:

A society becomes great not by the wealth of its rich,
but by the way it treats its workers.

If we want a better India,
if we want a healthier world,
the change begins in our homes—in our attitudes, and in the way we look at another human being.

Not as a cook.
Not as a driver.
Not as a servant.

But as a person.

Until we understand the suffering created by inferiority and superiority complexes, we will continue to live in fear—and even carry that fear into spiritual rituals.

Because in truth:

We are all manifestations of the Universal One.

Love your Self with all your heart,
with all your mind,
and with all your being.

And when you see the other, the other becomes a mirror—reflecting you back to yourself as you truly are: whole, peaceful, and joyful.

I once looked into the eyes of one of my household members and asked,
“Who is the one looking through your eyes?”

I fully resonated when she replied:

“The one looking through my eyes is the same one looking through your eyes.”

And so it is. 🙏
    `,

    id: 2,
    title: "Inner Engineering is fundamentally flawed",
    date: "February 20, 2026",
    content: `
    When examined closely, it amounts to conceptual padding—techniques that manage the person while leaving the core illusion intact. Don’t ignore it. Be aware of what it actually offers—and what it does not.

Inner Engineering vs Pure Non Duality.  

1. The Self
	•	PND (Pure Non-Duality): The self is unreal and must be unlearned.
	•	Inner Engineering: The self is assumed to be real and in need of refinement.

This is the foundational divergence. One dismantles the premise; the other reinforces it.

2. Role of the Ego

In PND, the ego is the central error—a false identity arising from apparent separation. Liberation occurs through direct recognition that the ego was never real. Nothing is fixed or improved; the illusion is simply seen through.

In Inner Engineering, the ego is not dissolved but managed. Psychological distance is encouraged, yet the ego itself is treated as a functional mechanism rather than a fundamental illusion.
	•	PND: Ego = illusion to be undone
	•	Inner Engineering: Ego = mechanism to be mastered

3. Method: Undoing vs. Engineering

PND involves undoing. There is no cumulative practice, no gradual achievement. Awakening is passive in the deepest sense—misidentification falls away when it is clearly seen.

Inner Engineering is built on doing. It relies on structured practices involving posture, breath, attention, and discipline. Progress is incremental and experiential, reinforcing the identity of a practitioner moving toward a better state.
	•	PND: Freedom through recognition
	•	Inner Engineering: Well-being through disciplined practice

4. View of the World

PND holds that the world has no ultimate reality. It appears within consciousness but has no independent existence. Its only function is to point back to what is prior to perception.

Inner Engineering treats the world as a meaningful arena for growth and responsibility. Liberation is framed as conscious participation within the world rather than awakening from it.

5. End Goal
	•	PND: The collapse of the seeker and recognition of what has always been.
	•	Inner Engineering: Inner balance, clarity, and effective engagement with life.

PND ends with the disappearance of the seeker.
Inner Engineering ends with a highly functional, self-managed individual.

6. Compatibility

They are not opposed, but they are not equivalent.
	•	PND is a pathless path of absolute negation: nothing needs fixing because nothing is broken.
	•	Inner Engineering is preparatory at best—stabilizing the body-mind to reduce suffering while leaving the core assumption of selfhood untouched.

In essence:
Inner Engineering operates within the dream.
PND ends it.
    `,
    
    id: 3,
    title: "True Forgiveness",
    date: "February 21, 2026",
    content: `
    The idea and practice of forgiveness, as it is commonly understood, are largely orchestrated by the ego.

“You made a mistake and hurt me, but I forgive you,”
or
“I made a mistake and hurt you; I am sorry—please forgive me.”

Both statements assume separation: a you who harmed and a me who was harmed. This framework belongs entirely to the ego.

PND—Pure Non-Duality— teaches forgiveness in a fundamentally different way.

In truth, I can only forgive myself, because the “other” does not exist as a separate self. The perception of separation is the root of error; and this error, in PND, is the belief that gives rise to suffering—experienced as fear, anxiety, and guilt.

To forgive myself is to forgive the false self I constructed: the ego identity, the fabricated story of who I believed myself to be. When I forgive myself, I simultaneously forgive my ego, your ego, and everyone’s ego, because the ego is made of nothing.

To forgive the ego, then, is to forgive nothing.

And if nothing is forgiven, it means nothing ever actually happened.

This is the ultimate paradox.

In the language of PND, forgiveness is the recognition that:
	•	What seemed to happen had no real effects
	•	What has no real effects did not truly happen
	•	Therefore, forgiveness is the realization that there is nothing to forgive

Because God is. 
Present Moment Awareness.  
In other words, being aware of being aware.
    `,
  },
];

const QandA = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            Blog & Publications
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Reflections on consciousness, self-inquiry, and the art of living by Jahanji.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {publications.map((pub) => {
            const isOpen = openId === pub.id;
            return (
              <Card
                key={pub.id}
                className={`bg-white shadow-md transition-shadow duration-300 ${
                  isOpen ? "shadow-lg" : "hover:shadow-lg"
                }`}
              >
                {/* Title Row */}
                <button
                  onClick={() => toggle(pub.id)}
                  className="w-full text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center justify-between px-6 py-5 gap-4">
                    <div>
                      <h2 className="text-base md:text-lg font-semibold text-[#4f5f4d] leading-snug">
                        {pub.title}
                      </h2>
                      <p className="text-xs text-gray-400 mt-1">{pub.date}</p>
                    </div>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#f0f4f0] flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 text-[#6B7F69]" />
                    </div>
                  </div>
                </button>

                {/* Dropdown Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                  style={{ transitionProperty: "max-height, opacity" }}
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-[#e8ede8] pt-5">
                      {/* Scrollable content area — fixed height, scrolls if content overflows */}
                      <div className="max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#c4d0c3] scrollbar-track-transparent">
                        {pub.content.split("\n\n").map((para, i) => (
                          <p
                            key={i}
                            className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 last:mb-0"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QandA;