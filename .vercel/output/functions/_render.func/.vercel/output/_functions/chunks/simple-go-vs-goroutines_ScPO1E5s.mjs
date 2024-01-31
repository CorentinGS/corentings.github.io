import { _ as __astro_tag_component__, F as Fragment, V as createVNode } from './astro_uM0hqRJo.mjs';
import { v as $$Image } from './pages/__o-4sg6ds.mjs';
import 'clsx';

const frontmatter = {
  "author": "Corentin GS",
  "heroImage": "../../assets/blog/simple-go-vs-goroutines.webp",
  "category": "Programming",
  "description": "Goroutine vs Simple function",
  "pubDate": "2023-01-11T23:00:00.000Z",
  "tags": ["Optimization", "Benchmark", "Golang"],
  "title": "Goroutine vs Simple function",
  "minutesRead": "7 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "goroutine-vs-simple-function",
    "text": "Goroutine vs Simple function"
  }, {
    "depth": 2,
    "slug": "structures",
    "text": "Structures"
  }, {
    "depth": 2,
    "slug": "conversion",
    "text": "Conversion"
  }, {
    "depth": 2,
    "slug": "use-case",
    "text": "Use case"
  }, {
    "depth": 2,
    "slug": "simple-function",
    "text": "Simple function"
  }, {
    "depth": 2,
    "slug": "goroutine-without-mutex",
    "text": "Goroutine without mutex"
  }, {
    "depth": 2,
    "slug": "goroutine-with-mutex",
    "text": "Goroutine with mutex"
  }, {
    "depth": 2,
    "slug": "benchmark",
    "text": "Benchmark"
  }, {
    "depth": 2,
    "slug": "why",
    "text": "Why ?"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }, {
    "depth": 2,
    "slug": "code",
    "text": "Code"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "goroutine-vs-simple-function",
      children: "Goroutine vs Simple function"
    }), "\n", createVNode(_components.p, {
      children: ["This is a simple example of why goroutines might be ", createVNode(_components.strong, {
        children: "overkill"
      }), " for some tasks and less efficient than a simple function."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "structures",
      children: "Structures"
    }), "\n", createVNode(_components.p, {
      children: "We got a simple structure that contains sensitive information that we don\u2019t want to be exposed to the outside world.\nTherefore, we created a second structure that hides the sensitive information and only exposes the information we want to be public."
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
          children: createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "// Pineapple is a struct that represents a database object with sensitive data that should be hidden"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: " Pineapple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " struct"
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
            children: "	Paro       "
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "string"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " `"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "faker:\"name\""
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "`"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	Turkey     "
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "string"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " `"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "faker:\"name\""
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "`"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	Banana     "
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "string"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " `"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "faker:\"name\""
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "`"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	Age        "
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "    `"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "faker:\"number\""
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "`"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	Size       "
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "    `"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "faker:\"number\""
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "`"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	IsAlive    "
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "bool"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	ID         "
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "uint"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	SecretCode "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "[]"
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "byte"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	Created    "
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "time"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Time"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	Updated    "
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "time"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Time"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "}"
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
            children: "// SafePineApple is a struct that represents a Pineapple object without sensitive data"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: " SafePineApple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " struct"
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
            children: "    Paro    "
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "string"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "    Turkey  "
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "string"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "    Banana  "
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "string"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "    IsAlive "
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "bool"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "    Age     "
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "int"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "    ID      "
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: "uint"
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
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "conversion",
      children: "Conversion"
    }), "\n", createVNode(_components.p, {
      children: "We need to convert our Pineapple object to a SafePineApple object.\nWe can do this by creating a method on the Pineapple struct that returns a SafePineApple object."
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
          children: createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "// ToSafePineApple converts a Pineapple object to a SafePineApple object"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "func"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8",
              fontStyle: "italic"
            },
            children: "p "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Pineapple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " ToSafePineApple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: " SafePineApple"
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
            children: "	return"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: " SafePineApple"
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
            children: "		Paro"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "    p"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "Paro"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		Turkey"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "  p"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "Turkey"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		Banana"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "  p"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "Banana"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		IsAlive"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " p"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "IsAlive"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		Age"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "     p"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "Age"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		ID"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "      p"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "ID"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
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
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "use-case",
      children: "Use case"
    }), "\n", createVNode(_components.p, {
      children: ["In our use case we have an ", createVNode(_components.strong, {
        children: "array of Pineapple objects"
      }), " coming from our database that we want to convert to ", createVNode(_components.strong, {
        children: "SafePineApple objects"
      }), " and store them in a ", createVNode(_components.strong, {
        children: "new array"
      }), ".\nThe ", createVNode(_components.strong, {
        children: "order of the objects"
      }), " in the array should be the same as the original array as it has already been sorted by a sql query."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "simple-function",
      children: "Simple function"
    }), "\n", createVNode(_components.p, {
      children: "We can do this by creating a simple function that takes an array of Pineapple objects and returns an array of SafePineApple objects."
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
          children: createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "// SimpleConvertPineApplesToSafety converts an array of Pineapple objects to an array of SafePineApple objects"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " SimpleConvertPineApplesToSafety"
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
            children: "pineapples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " []"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Pineapple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " []"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "SafePineApple"
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
            children: "	safePineApples "
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
            children: "([]"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "SafePineApple"
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
            children: "pineapples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "))"
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
            children: " idx"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " pineapple "
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
            children: " pineapples "
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
            children: "		safePineApples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "idx"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " pineapple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "ToSafePineApple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "()"
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
            children: " safePineApples"
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
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["This function is very ", createVNode(_components.strong, {
        children: "simple"
      }), " and ", createVNode(_components.strong, {
        children: "easy to understand"
      }), ". We loop through the array of Pineapple objects and convert them to SafePineApple objects."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "goroutine-without-mutex",
      children: "Goroutine without mutex"
    }), "\n", createVNode(_components.p, {
      children: ["We can do this by using ", createVNode(_components.strong, {
        children: "goroutines"
      }), " to work on the array concurrently and store the results in a new array."]
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
            children: " GoroutinesNoMutexConvertPineApplesToSafety"
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
            children: "pineapples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " []"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Pineapple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " []"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "SafePineApple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "	// Create a slice to store the SafePineApples"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	safePineApples "
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
            children: "([]"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "SafePineApple"
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
            children: "pineapples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")/"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "2"
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
            children: "pineapples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	safePineApples2 "
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
            children: "([]"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "SafePineApple"
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
            children: "pineapples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")/"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: ")"
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
            children: " // Create a WaitGroup to wait for all goroutines to finish"
          })]
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
            children: "            // Add 1 to the WaitGroup"
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
            children: "	// Create a goroutine to convert the first half of the Pineapple objects"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "	go"
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
              color: "#FFCB6B"
            },
            children: "Pineapple"
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
            children: "		defer"
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
            children: " // Decrement the WaitGroup when the goroutine is done"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "		for"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " idx"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " pineapple "
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
            children: " chunk "
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
            children: " // Loop through the chunk of Pineapple objects"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "			safePineApples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "idx"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " pineapple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "ToSafePineApple"
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
            children: " // Convert the Pineapple object to a SafePineApple object"
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
              color: "#89DDFF"
            },
            children: "	}("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "pineapples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "[:"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "len"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "pineapples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")/"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "2"
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
            children: " // Pass the first half of the Pineapple objects to the goroutine"
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
            children: "	// Convert the second half of the Pineapple objects in the main thread"
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
            children: " idx"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " pineapple "
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
            children: " pineapples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "len"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "pineapples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")/"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":]"
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
            children: "		safePineApples2"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "idx"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " pineapple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "ToSafePineApple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "()"
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
            children: "	// Wait for all goroutines to finish"
          })
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
            children: "	// Group both pineapples"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	safePineApples "
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
            children: "safePineApples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " safePineApples2"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "...)"
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
            children: "	// Return the SafePineApples"
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
            children: " safePineApples"
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
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["This function is a bit more ", createVNode(_components.strong, {
        children: "complex"
      }), " than the simple function. We use a goroutine to convert the first half while the other half is handled by the main thread.\nWe use a ", createVNode(_components.strong, {
        children: "WaitGroup"
      }), " to wait for the goroutine to finish before returning the results."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "goroutine-with-mutex",
      children: "Goroutine with mutex"
    }), "\n", createVNode(_components.p, {
      children: ["We can also add ", createVNode(_components.strong, {
        children: "mutexes"
      }), " to the goroutine to make it ", createVNode(_components.strong, {
        children: "thread safe"
      }), "."]
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
            children: " GoroutinesConvertPineApplesToSafety"
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
            children: "pineapples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " []"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Pineapple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " []"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "SafePineApple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "	// Create a slice to store the SafePineApples"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	safePineApples "
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
            children: "([]"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "SafePineApple"
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
            children: "pineapples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "))"
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
            children: "	// Split the offers into chunks"
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
              color: "#89DDFF"
            },
            children: " [][]"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Pineapple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "pineapples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "[:"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "len"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "pineapples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")/"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "],"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " pineapples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "len"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "pineapples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ")/"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":]}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "	mutex "
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
            children: "Mutex"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "{}"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // Create a mutex to lock the slice when writing to it"
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
            children: " // Create a WaitGroup to wait for all goroutines to finish"
          })]
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
            children: "           // Add 1 to the WaitGroup"
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
            children: "	// Create a goroutine to convert the first half of the Pineapple objects"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "	go"
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
              color: "#FFCB6B"
            },
            children: "Pineapple"
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
            children: "		defer"
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
            children: " // Decrement the WaitGroup when the goroutine is done"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "		for"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " idx"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " pineapple "
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
            children: " chunk "
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
            children: " // Loop through the chunk of Pineapple objects"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "			mutex"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "Lock"
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
            children: " // Lock the mutex"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "			safePineApples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "idx"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " pineapple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "ToSafePineApple"
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
            children: " // Convert the Pineapple object to a SafePineApple object"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "			mutex"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "Unlock"
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
            children: "  // Unlock the mutex"
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
              color: "#89DDFF"
            },
            children: "	}("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "chunks"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "0"
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
            children: " // Pass the first half of the Pineapple objects to the goroutine"
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
            children: "	// Convert the second half of the Pineapple objects in the main thread"
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
            children: " idx"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " pineapple "
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
            children: " chunks"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "]"
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
            children: "		mutex"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "Lock"
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
            children: " // Lock the mutex"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		safePineApples"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "idx"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "len"
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
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "])]"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " pineapple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "ToSafePineApple"
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
            children: " // Convert the Pineapple object to a SafePineApple object"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		mutex"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "Unlock"
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
            children: " // Unlock the mutex"
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
            children: "	// Wait for all goroutines to finish"
          })
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
            children: " safePineApples"
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
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "This function make use of the mutex to lock the slice when writing to it.\nThis makes sure that the goroutine and the main thread don\u2019t write to the same index at the same time but instead wait for the other to finish."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "benchmark",
      children: "Benchmark"
    }), "\n", createVNode(_components.p, {
      children: ["Now that we have our functions we can benchmark them to see which one is the ", createVNode(_components.strong, {
        children: "fastest."
      }), "\nTo benchmark our functions we run them with arrays of different sizes."]
    }), "\n", createVNode(_components.p, {
      children: "Our benchmark function looks like this:"
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
            children: " Benchmark_SimpleConvertPineApplesToSafety"
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
            children: " n "
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
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "500"
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
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 2000"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 5000"
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
            children: "}"
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
              color: "#C3E88D"
            },
            children: "Benchmark_SimpleConvertPineApplesToSafety-"
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
              color: "#BABED8"
            },
            children: " n"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "),"
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
              color: "#BABED8"
            },
            children: "			pineApples "
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
            children: "([]"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Pineapple"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " n"
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
              color: "#89DDFF"
            },
            children: "			var"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " pine "
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Pineapple"
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
            children: " n"
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
              color: "#BABED8"
            },
            children: "				_ "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " faker"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "FakeData"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "(&"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "pine"
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
              color: "#BABED8"
            },
            children: "				pine"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "Created "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " time"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "Now"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: "AddDate"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "0"
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
              color: "#89DDFF"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "i"
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
              color: "#BABED8"
            },
            children: "				pine"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "ID "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#C792EA"
            },
            children: " uint"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "i"
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
              color: "#BABED8"
            },
            children: "				pine"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "IsAlive "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "				pineApples"
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
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " pine"
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
            children: "				SimpleConvertPineApplesToSafety"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "pineApples"
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
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "To run the benchmark we use the following command:"
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "go"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " test"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " -bench=."
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " -benchtime"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 5"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "s"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " >"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " benchmark.txt"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: " &&"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: " benchstat"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " benchmark.txt"
          })]
        })
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Benchstat is a tool that can be used to compare the results of benchmarks."
    }), "\n", createVNode(_components.p, {
      children: "The results of the benchmark are as follows:"
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
              color: "#FFCB6B"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "                                                                        time/op"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Benchmark_SimpleConvertPineApplesToSafety-500-32"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "                          15.8"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Benchmark_SimpleConvertPineApplesToSafety-1000-32"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "                         32.0"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Benchmark_SimpleConvertPineApplesToSafety-2000-32"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "                         66.5"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Benchmark_SimpleConvertPineApplesToSafety-5000-32"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "                          193"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Benchmark_SimpleConvertPineApplesToSafety-10000-32"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "                         465"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Benchmark_GoroutinesConvertPineApplesToSafety-500-32"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "                      23.5"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Benchmark_GoroutinesConvertPineApplesToSafety-1000-32"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "                     46.2"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Benchmark_GoroutinesConvertPineApplesToSafety-2000-32"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "                     87.7"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Benchmark_GoroutinesConvertPineApplesToSafety-5000-32"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "                      242"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Benchmark_GoroutinesConvertPineApplesToSafety-10000-32"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "                     507"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Benchmark_NoMutexGoroutinesConvertPineApplesToSafety-500-32"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "               28.3"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Benchmark_NoMutexGoroutinesConvertPineApplesToSafety-1000-32"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "              48.7"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Benchmark_NoMutexGoroutinesConvertPineApplesToSafety-2000-32"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "               105"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Benchmark_NoMutexGoroutinesConvertPineApplesToSafety-5000-32"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "               257"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Benchmark_NoMutexGoroutinesConvertPineApplesToSafety-10000-32"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "              533"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "%"
          })]
        })]
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["As you can see the ", createVNode(_components.strong, {
        children: "simple function is the fastest"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "why",
      children: "Why ?"
    }), "\n", createVNode(_components.p, {
      children: "The reason why the simple function is the fastest is that the process of converting the Pineapple objects to SafePineApple objects is very fast.\nThe time it takes to create the goroutines and wait for them to finish is longer than the time it takes to convert the Pineapple objects to SafePineApple objects."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["Furthermore, in our goroutines implementation we have to convert the Pineapple objects then lock the mutex, write to the slice and unlock the mutex.\nThis is a lot of ", createVNode(_components.strong, {
        children: "overhead for a very simple task"
      }), "."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Don\u2019t use goroutines when you don\u2019t need them."
      }), " That may seem obvious, but it\u2019s easy to forget when you\u2019re trying to optimize your code.\nIn this example the overhead of creating the goroutines and waiting for them to finish is ", createVNode(_components.strong, {
        children: "longer"
      }), " than the time it takes to convert the Pineapple objects to SafePineApple objects."]
    }), "\n", createVNode(_components.p, {
      children: ["Goroutines are great for tasks that take a ", createVNode(_components.strong, {
        children: "long time to complete"
      }), " and can be done in parallel.\nI would suggest to write the ", createVNode(_components.strong, {
        children: "simplest code possible"
      }), " and then benchmark it to see if you can improve it using goroutines instead."]
    }), "\n", createVNode(_components.p, {
      children: ["Moreover, simple code is ", createVNode(_components.strong, {
        children: "easier to read and maintain"
      }), " than complex code, that\u2019s why writing complex code might not be necessary if performance is not an issue.\n", createVNode(_components.strong, {
        children: "I\u2019d prefer to have a simple function that takes a few milliseconds longer to complete than a complex function."
      })]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "code",
      children: "Code"
    }), "\n", createVNode(_components.p, {
      children: ["The code for this article can be found on ", createVNode("a", {
        href: "https://github.com/CorentinGS/go-teaching/tree/main/goroutines_simple_vs_complex",
        class: "font-bold underline text-accent",
        children: " GitHub "
      })]
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
const url = "src/content/blog/simple-go-vs-goroutines.mdx";
const file = "/home/yume/WebstormProjects/corentings.github.io/src/content/blog/simple-go-vs-goroutines.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/yume/WebstormProjects/corentings.github.io/src/content/blog/simple-go-vs-goroutines.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
