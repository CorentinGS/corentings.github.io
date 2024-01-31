import { a0 as __astro_tag_component__, F as Fragment, $ as createVNode } from './astro_7zUASvUU.mjs';
import { v as $$Image } from './pages/__RV1SwufO.mjs';
import 'clsx';

const frontmatter = {
  "author": "Corentin GS",
  "heroImage": "../../assets/blog/optimizing-goroutines-sum-of-squares.webp",
  "category": "Programming",
  "description": "Discover how to optimize performance, avoid common pitfalls, and achieve top-notch results. Ready to conquer the challenges? Let's go!",
  "pubDate": "2023-08-09T22:00:00.000Z",
  "tags": ["Algorithm", "Golang"],
  "title": "Solving the Sum of Squares Problem: Optimizing Performance",
  "minutesRead": "7 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "disclaimer-enhancing-algorithm-discussions",
    "text": "Disclaimer: Enhancing Algorithm Discussions"
  }, {
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "the-sum-of-squares-problem-a-simple-problem",
    "text": "The Sum of Squares Problem: A simple problem"
  }, {
    "depth": 2,
    "slug": "goroutines-harnessing-the-power-of-concurrency",
    "text": "Goroutines: Harnessing the Power of Concurrency"
  }, {
    "depth": 2,
    "slug": "goroutines-common-pitfall",
    "text": "Goroutines: Common pitfall"
  }, {
    "depth": 2,
    "slug": "benchmarking-the-quest-for-ultimate-performance",
    "text": "Benchmarking: The Quest for Ultimate Performance"
  }, {
    "depth": 2,
    "slug": "data-structures--algorithms-choose-wisely",
    "text": "Data Structures & Algorithms: Choose Wisely"
  }, {
    "depth": 2,
    "slug": "pitfalls-and-bad-practices-the-road-to-destruction",
    "text": "Pitfalls and Bad Practices: The Road to Destruction"
  }, {
    "depth": 2,
    "slug": "conclusion-the-sum-of-success",
    "text": "Conclusion: The Sum of Success"
  }, {
    "depth": 2,
    "slug": "references",
    "text": "References"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "disclaimer-enhancing-algorithm-discussions",
      children: "Disclaimer: Enhancing Algorithm Discussions"
    }), "\n", createVNode(_components.p, {
      children: ["Before delving into the main topic, I want to express my respect for the original post\u2019s intent.\nMy response aims to provide slight corrections that can benefit readers seeking accurate information. In the spirit of shared learning, I intend to contribute constructively rather than criticize. ", createVNode("br", {}), "Clarifications and alternative viewpoints can foster a deeper understanding of complex concepts. Let\u2019s continue engaging in open discussions, embracing diverse insights as we collectively refine our knowledge."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: ["Greetings, fellow Gophers! Are you ready to explore the intriguing world of Goroutines and unravel the mysteries of the sum of squares problem?\nRecently, a friend learning Go shared a ", createVNode("a", {
        href: "https://medium.com/@ShivamSouravJha/golang-only-things-i-know-for-the-interview-4322d29d67a3",
        class: "font-bold underline text-accent",
        target: "_blank",
        rel: "noopener",
        children: "medium article"
      }), " with me.\nIt discussed Goroutines and how they can be used to solve a simple problem: calculating the sum of square numbers in a given array."]
    }), "\n", createVNode(_components.p, {
      children: "In this blog post, we\u2019ll delve into how Goroutines, channels, and data structures in Golang can be utilized to tackle the sum of squares problem. We\u2019ll also discuss common pitfalls and inefficient practices that can hinder performance.\nFear not, my friends, for we shall also unveil secrets to optimizing your code and achieving exceptional performance. So, let\u2019s embark on this quest together!"
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "the-sum-of-squares-problem-a-simple-problem",
      children: "The Sum of Squares Problem: A simple problem"
    }), "\n", createVNode(_components.p, {
      children: "The medium article of my friend addressed the following problem:  \u201C6. Write a program that returns the sum of the squares of each element of an array in Golang.\u201D"
    }), "\n", createVNode(_components.p, {
      children: "Easy enough. We need to iterate through every element in the array and add the square of each one."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code material-theme-palenight",
      style: {
        backgroundColor: "#292D3E",
        color: "#babed8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "func"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " simpleSumSquare"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8",
              fontStyle: "italic"
            },
            children: "items"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " []"
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: " int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	total "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // total sum"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "	for"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " i "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ";"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " i "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " len"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "items"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ");"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " i"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "++"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		total "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "+="
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " items"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "i"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " items"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "i"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // square the item and add it to the total"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "	}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "	return"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " total "
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "// return the total sum"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Can we simplify it further? The code is reasonably straightforward. However, can we make it faster?"
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "goroutines-harnessing-the-power-of-concurrency",
      children: "Goroutines: Harnessing the Power of Concurrency"
    }), "\n", createVNode(_components.p, {
      children: ["Goroutines, the superheroes of Golang, are lightweight threads that enable concurrent task execution.\nBy utilizing Goroutines, we can execute multiple functions simultaneously, making our code more efficient and faster. But, with great power comes great responsibility.", createVNode("br", {}), "\nOne common mistake in solving the sum of squares problem is the improper use of Goroutines.\nSome developers create too many Goroutines without proper synchronization, leading to chaos and incorrect results.\nRemember, coordination is crucial!"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "goroutines-common-pitfall",
      children: "Goroutines: Common pitfall"
    }), "\n", createVNode(_components.p, {
      children: "When solving the sum of squares problem, the choice of algorithm and data structures significantly impacts performance.\nThe aforementioned medium blog post highlights the use of Goroutines and their potential to substantially improve performance."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code material-theme-palenight",
      style: {
        backgroundColor: "#292D3E",
        color: "#babed8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "func"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " sumSquare"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8",
              fontStyle: "italic"
            },
            children: "items"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " []"
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: " int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	number "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " make"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "(chan"
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: " int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "   // channel for sending numbers"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	response "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " make"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "(chan"
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: " int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // channel for receiving responses"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "	var"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " wg "
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "sync"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "WaitGroup"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // wait group for waiting for all goroutines to finish"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	total "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // total sum"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "	// Create a goroutine for each item in the slice"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "	for"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " _"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " item "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: " range"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " items "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "{"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		wg"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "Add"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "           // increment the wait group counter"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "		go"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " func("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8",
              fontStyle: "italic"
            },
            children: "item"
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: " int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " {"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // create a goroutine"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "			defer"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " wg"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "Done"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "    // decrement the wait group counter when the goroutine finishes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "			sum1 "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " <-"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "number   "
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "// receive a number from the number channel"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "			sum1 "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " sum1 "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " sum1 "
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "// square the number"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "			response "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "<-"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " sum1   "
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "// send the result to the response channel"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "		}("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "item"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // pass the item to the goroutine"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		number "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "<-"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " item      "
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "// send the item to the number channel"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		total "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "+="
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " <-"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "response "
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "// receive the result from the response channel"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "	}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "	defer"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " close"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "number"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "   // close the number channel"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "	defer"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " close"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "response"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // close the response channel"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	wg"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "Wait"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // wait for all goroutines to finish"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "	return"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " total "
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "// return the total sum"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This code creates a new goroutine for each item in the array and then performs the squaring operation. It uses channels to pass values between the goroutine and the main thread."
    }), "\n", createVNode(_components.p, {
      children: ["However, is this code correct? As discussed in  ", createVNode("a", {
        href: "../mergesort-parallel",
        class: "font-bold underline text-accent",
        target: "_blank",
        rel: "prefetch noopener",
        children: "my previous blog post about the mergesort algorithm"
      }), ", there are better practices than spawning numerous goroutines.\nMore than being lightweight is needed to justify using many goroutines; it still uses memory and time, and we must be cautious."]
    }), "\n", createVNode(_components.p, {
      children: "As always, let\u2019s benchmark the code!"
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "benchmarking-the-quest-for-ultimate-performance",
      children: "Benchmarking: The Quest for Ultimate Performance"
    }), "\n", createVNode(_components.p, {
      children: "Benchmarking lets us measure code performance and compare implementations to identify the best."
    }), "\n", createVNode(_components.p, {
      children: "With Golang\u2019s built-in benchmarking tools, we can easily measure the execution time of our code and identify bottlenecks. By tweaking our implementation and experimenting with different approaches, we can achieve optimal performance and revel in our achievements."
    }), "\n", createVNode(_components.p, {
      children: "Hence, I\u2019ve created a small function to benchmark our algorithms using randomly generated arrays of varying sizes to observe their performance at different scales:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code material-theme-palenight",
      style: {
        backgroundColor: "#292D3E",
        color: "#babed8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "func"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " benchmarkFramework"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8",
              fontStyle: "italic"
            },
            children: "b"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "testing"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "B"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8",
              fontStyle: "italic"
            },
            children: " sumFunction"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " func([]"
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: " int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	sizes "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " [][]"
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "RandomArray"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "100"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 100"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "		RandomArray"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "1000"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 1000"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "		RandomArray"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "10000"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 10000"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "		RandomArray"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "100000"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 100000"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "		RandomArray"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "1000000"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 1000000"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "	}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	b"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "ResetTimer"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "	for"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " _"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " size "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: " range"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " sizes "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "{"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		b"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "Run"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "fmt"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "Sprintf"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#F07178"
            },
            children: "%d"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " len"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "size"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")),"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " func("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8",
              fontStyle: "italic"
            },
            children: "b"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "testing"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "B"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "			for"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " i "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ";"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " i "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " b"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "N"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ";"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " i"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "++"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "				sumFunction"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "size"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "			}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "		})"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "	}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Here are the results:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "name"
          }), createVNode(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "time/op"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SimpleSumSquare/100"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "49.5ns"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SimpleSumSquare/1000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "450ns"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SimpleSumSquare/10000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4.41\xB5s"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SimpleSumSquare/100000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "43.8\xB5s"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SimpleSumSquare/1000000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "437\xB5s"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "."
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            }
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SumSquare/100"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "75.2\xB5s"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SumSquare/1000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "730\xB5s"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SumSquare/10000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7.24ms"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SumSquare/100000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "72.4ms"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SumSquare/1000000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "739ms"
          })]
        })]
      })]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "As we can see, the simple algorithm outperforms the complex one! Why? Because spawning too many Goroutines slows down the program and consumes a significant amount of memory."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "data-structures--algorithms-choose-wisely",
      children: "Data Structures & Algorithms: Choose Wisely"
    }), "\n", createVNode(_components.p, {
      children: "When solving the sum of squares problem, the choice of data structures and algorithms significantly impacts performance."
    }), "\n", createVNode(_components.p, {
      children: "I decided to develop a more efficient function. Consequently, I utilized chunks and a Goroutine pool."
    }), "\n", createVNode(_components.p, {
      children: "A goroutines pool manages a set number of reusable goroutines, reducing overhead in concurrent programs. Chunks break data into segments for parallel processing, optimizing resource use, and enhancing efficiency. Combining these techniques streamlines parallelism, maximizing concurrency benefits."
    }), "\n", createVNode(_components.p, {
      children: "Here is my code:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code material-theme-palenight",
      style: {
        backgroundColor: "#292D3E",
        color: "#babed8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "func"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " simpleParallelSumSquare"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8",
              fontStyle: "italic"
            },
            children: "items"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " []"
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: " int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "	const"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " chunkSize "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 10000"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "	if"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " len"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "items"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " <="
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 10000"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " {"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // Threshold for small slices"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "		return"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " simpleSumSquare"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "items"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // Use the simpleSumSquare function"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "	}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "	// Divide the items into chunks"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	chunks "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " make"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "([][]"
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "	for"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " i "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ";"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " i "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " len"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "items"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ");"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " i "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "+="
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " chunkSize "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "{"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		end "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " i "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " chunkSize "
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "// end index for the chunk"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "		if"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " end "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " len"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "items"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "			end "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " len"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "items"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // last chunk may be smaller than chunkSize"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "		}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		chunks "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " append"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "chunks"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " items"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "i"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "end"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "])"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // append the chunk to the chunks slice"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "	}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "	// Create a goroutine for each chunk"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	wg "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: " sync"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "WaitGroup"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "{}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	resultChan "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " make"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "(chan"
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: " int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " len"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "chunks"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "))"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // channel for receiving results"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "	for"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " _"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " chunk "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: " range"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " chunks "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // iterate over the chunks"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		wg"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "Add"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "              // increment the wait group counter"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "		go"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " func("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8",
              fontStyle: "italic"
            },
            children: "chunk"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " []"
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " {"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // create a goroutine"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "			resultChan "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "<-"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " simpleSumSquare"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "chunk"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // send the result to the result channel"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "			wg"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "Done"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "                            // decrement the wait group counter when the goroutine finishes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "		}("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "chunk"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // pass the chunk to the goroutine"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "	}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	wg"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "Wait"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "         // Wait for all goroutines to finish"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "	close"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "resultChan"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // close the result channel"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "	// Sum the results"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	total "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "	for"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " partialSum "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: " range"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " resultChan "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "{"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		total "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "+="
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " partialSum"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "	}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "	return"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " total "
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "// return the total sum"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Can this code be improved further? I could reduce the number of allocations and enhance performance. However, I opted for simplicity to better illustrate pitfalls and good practices related to Goroutines."
    }), "\n", createVNode(_components.p, {
      children: "Is it genuinely efficient? Let\u2019s benchmark it, as always!"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "name"
          }), createVNode(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "time/op"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SimpleSumSquare/100"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "49.5ns"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SimpleSumSquare/1000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "450ns"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SimpleSumSquare/10000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4.41\xB5s"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SimpleSumSquare/100000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "43.8\xB5s"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SimpleSumSquare/1000000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "437\xB5s"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "."
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            }
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SumSquare/100"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "75.2\xB5s"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SumSquare/1000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "730\xB5s"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SumSquare/10000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7.24ms"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SumSquare/100000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "72.4ms"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SumSquare/1000000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "739ms"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "."
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            }
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SimpleParallelSumSquare/100"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "49.5ns"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SimpleParallelSumSquare/1000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "450ns"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SimpleParallelSumSquare/10000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4.41\xB5s"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SimpleParallelSumSquare/100000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "18.0\xB5s"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "SimpleParallelSumSquare/1000000"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "67.2\xB5s"
          })]
        })]
      })]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "As we can observe, our new code is significantly faster!"
    }), "\n", createVNode(_components.h2, {
      id: "pitfalls-and-bad-practices-the-road-to-destruction",
      children: "Pitfalls and Bad Practices: The Road to Destruction"
    }), "\n", createVNode(_components.p, {
      children: "Ah, the treacherous road of pitfalls and bad practices. One common mistake is the excessive creation and destruction of Goroutines.\nCreating Goroutines carries a cost; making too many can slow your program and consume unnecessary resources."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["Furthermore, we can use unsafe features to improve our code\u2019s performance but must not sacrifice maintainability and safety for speed if it\u2019s not really required.\nIf you want to learn more about unsafe features available on Golang, you can look at the code published ", createVNode("a", {
        href: "https://github.com/CorentinGS/go-teaching/tree/main/goroutines_sum_square",
        class: "font-bold underline text-accent",
        target: "_blank",
        rel: "noopener nofollow",
        children: " here on my Github "
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion-the-sum-of-success",
      children: "Conclusion: The Sum of Success"
    }), "\n", createVNode(_components.p, {
      children: "Congratulations, my friends! We\u2019ve journeyed through Goroutines, channels, and data structures, conquering the sum of squares problem.\nWe\u2019ve learned from our mistakes, optimized our code, and achieved top-notch performance."
    }), "\n", createVNode(_components.p, {
      children: "But remember, the pursuit of knowledge is everlasting.\nKeep exploring, experimenting, and pushing the boundaries of what\u2019s possible. And always remember, with great power comes great responsibility.\nSo go forth, my fellow Gophers, may your code be swift, your bugs be few, and your adventures be legendary!"
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode("a", {
          href: "https://medium.com/@ShivamSouravJha/golang-only-things-i-know-for-the-interview-4322d29d67a3",
          class: "font-bold underline text-accent",
          target: "_blank",
          rel: "noopener nofollow",
          children: "Medium article"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode("a", {
          href: "https://github.com/CorentinGS/go-teaching/tree/main/goroutines_sum_square",
          class: "font-bold underline text-accent",
          target: "_blank",
          rel: "noopener",
          children: "Code snippets"
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/optimizing-goroutines-sum-of-squares.mdx";
const file = "/home/yume/WebstormProjects/corentings.github.io/src/content/blog/optimizing-goroutines-sum-of-squares.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/yume/WebstormProjects/corentings.github.io/src/content/blog/optimizing-goroutines-sum-of-squares.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
