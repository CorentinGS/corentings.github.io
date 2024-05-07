import { a7 as __astro_tag_component__, j as Fragment, a6 as createVNode } from './astro__UYtZeqd.mjs';
import { t as $$Image } from './pages/__DYJJjHjB.mjs';
import 'clsx';

const frontmatter = {
  "author": "Corentin GS",
  "heroImage": "../../assets/blog/mergesort-parallel.webp",
  "category": "Programming",
  "description": "This is a simple example of how to use goroutines to implement a merge sort algorithm.",
  "pubDate": "2023-01-11T23:00:00.000Z",
  "tags": ["Benchmark", "Algorithm", "Golang"],
  "title": "Merge Sort using Goroutines",
  "minutesRead": "4 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "parallel-merge-sort-vs-simple-merge-sort",
    "text": "Parallel Merge Sort vs Simple Merge Sort"
  }, {
    "depth": 2,
    "slug": "the-merge-sort-algorithm",
    "text": "The Merge Sort Algorithm"
  }, {
    "depth": 2,
    "slug": "the-merge-sort-algorithm-with-goroutines",
    "text": "The Merge Sort Algorithm with Goroutines"
  }, {
    "depth": 2,
    "slug": "benchmarking-the-merge-sort-algorithms",
    "text": "Benchmarking the Merge Sort Algorithms"
  }, {
    "depth": 2,
    "slug": "why-is-the-parallel-merge-sort-algorithm-faster",
    "text": "Why is the Parallel Merge Sort Algorithm Faster?"
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
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "parallel-merge-sort-vs-simple-merge-sort",
      children: "Parallel Merge Sort vs Simple Merge Sort"
    }), "\n", createVNode(_components.p, {
      children: ["This is a simple example of how to use goroutines to ", createVNode(_components.strong, {
        children: "parallelize"
      }), " a merge sort algorithm.\nWe compare the performance of a simple merge sort algorithm with a parallel merge sort algorithm that uses goroutines."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "the-merge-sort-algorithm",
      children: "The Merge Sort Algorithm"
    }), "\n", createVNode(_components.p, {
      children: "The merge sort algorithm is a divide and conquer algorithm that recursively splits the input array into two halves,\nsorts each half, and then merges the two sorted halves into a single sorted array."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "To speed up the merge sort algorithm, we use insertion sort for small subarrays (less than 12 elements)."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "The implementation of the algorithm uses generics to allow sorting of any type of numbers."
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
      "data-language": "go",
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
            children: " MergeSort"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8",
              fontStyle: "italic"
            },
            children: "T"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: " Number"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "]("
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
              color: "#FFCB6B"
            },
            children: "T"
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
            children: "T"
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
            children: "	size "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
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
          })]
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
              color: "#BABED8"
            },
            children: " size "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 2"
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
            children: "		return"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " items"
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
            children: "	if"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " size "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " K "
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
              color: "#89DDFF",
              fontStyle: "italic"
            },
            children: "		return"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " Insertionsort"
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
            children: "	middle "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " size "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 2"
          })]
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
            children: " a "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " MergeSort"
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
            children: "[:"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "middle"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "])"
          })]
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
            children: " b "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " MergeSort"
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
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "middle"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":])"
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
              color: "#82AAFF"
            },
            children: " merge"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " b"
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
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "the-merge-sort-algorithm-with-goroutines",
      children: "The Merge Sort Algorithm with Goroutines"
    }), "\n", createVNode(_components.p, {
      children: ["The parallel merge sort algorithm uses ", createVNode(_components.strong, {
        children: "goroutines"
      }), " to sort the two halves of the input array in parallel."]
    }), "\n", createVNode(_components.p, {
      children: ["To prevent the creation of too many goroutines, we use a ", createVNode(_components.strong, {
        children: "threshold"
      }), " to determine when to use goroutines.\nIf the size of the input array is less than the threshold,\nwe use a simple merge sort algorithm instead of a parallel one."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Here we use a threshold of 512 elements. We can benchmark the performance of the algorithm with\ndifferent thresholds to find the optimal threshold, but we will not do that in this example."
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
      "data-language": "go",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "// ParallelMerge Perform merge sort on a slice using goroutines"
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
            children: " ParallelMerge"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8",
              fontStyle: "italic"
            },
            children: "T"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: " Number"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "]("
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
              color: "#FFCB6B"
            },
            children: "T"
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
            children: "T"
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
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 2"
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
            children: "		return"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " items"
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
            children: "	// Use a simple merge sort algorithm if the size of the input array is less than the threshold"
          })
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
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 512"
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
            children: "		return"
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " MergeSort"
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
            children: "	// Create the wait group to wait for the goroutines to finish"
          })
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
            children: " middle "
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
              color: "#89DDFF"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "  // Find the middle index of the input array"
          })]
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
            children: " a "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "[]"
          }), createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "T"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: "                   // Create a slice to hold the first half of the input array"
          })]
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
            children: " func()"
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
            children: "                // Create a goroutine to sort the first half of the input array"
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
            children: "       // Decrement the wait group counter when the goroutine finishes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "		a "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " ParallelMerge"
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
            children: "[:"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "middle"
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
            children: " // Sort the first half of the input array"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "	}()"
          })
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
            children: " b "
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#82AAFF"
            },
            children: " ParallelMerge"
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
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "middle"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ":])"
          }), createVNode(_components.span, {
            style: {
              color: "#676E95",
              fontStyle: "italic"
            },
            children: " // Sort the second half of the input array"
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
            children: " // Wait for the goroutine to finish"
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
              color: "#82AAFF"
            },
            children: " merge"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#89DDFF"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " b"
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
            children: " // Merge the two sorted halves"
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
        })]
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "benchmarking-the-merge-sort-algorithms",
      children: "Benchmarking the Merge Sort Algorithms"
    }), "\n", createVNode(_components.p, {
      children: ["Now we can benchmark our merge sort algorithms to compare their ", createVNode(_components.strong, {
        children: "performance"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["To benchmark the algorithms, we use arrays of different sizes and ", createVNode(_components.strong, {
        children: "measure the time"
      }), " it takes to sort the arrays."]
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
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
              color: "#C3E88D"
            },
            children: " 5s"
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
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
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
      "data-language": "bash",
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
            children: "                                   time/op"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Mergesort/1000"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "                     14.6\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " 0%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Mergesort/10000"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "                     473\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " 0%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Mergesort/100000"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "                   6.33ms"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " 0%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "Mergesort/1000000"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "                  87.4ms"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " 0%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "MergesortWithGoroutines/1000"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "       18.7\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " 0%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "MergesortWithGoroutines/10000"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "       217\xB5s"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " 0%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "MergesortWithGoroutines/100000"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "     2.71ms"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " 0%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFCB6B"
            },
            children: "MergesortWithGoroutines/1000000"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "    29.0ms"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " \xB1"
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: " 0%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["As we can see, the parallel merge sort algorithm is ", createVNode(_components.strong, {
        children: "much faster"
      }), " than the simple merge sort algorithm for ", createVNode(_components.strong, {
        children: "large arrays"
      }), "."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "why-is-the-parallel-merge-sort-algorithm-faster",
      children: "Why is the Parallel Merge Sort Algorithm Faster?"
    }), "\n", createVNode(_components.p, {
      children: ["The parallel merge sort algorithm is faster because it uses goroutines to sort the two halves of the input array in ", createVNode(_components.strong, {
        children: "parallel"
      }), ".\nThe simple merge sort algorithm sorts the two halves of the input array ", createVNode(_components.strong, {
        children: "sequentially"
      }), "."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["As discussed in the previous article, the cost of ", createVNode(_components.strong, {
        children: "creating a goroutine can be high"
      }), ".\nSo we should use a parallel merge sort algorithm only when the size of the input array is ", createVNode(_components.strong, {
        children: "large enough to justify the cost"
      }), " of creating goroutines."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: ["In this example, we have seen how to use ", createVNode(_components.strong, {
        children: "goroutines to parallelize"
      }), " a merge sort algorithm. We have also benchmarked the performance of the merge sort algorithms to compare their performance.\nGoroutines are a ", createVNode(_components.strong, {
        children: "powerful tool"
      }), " that should be used ", createVNode(_components.strong, {
        children: "only when the cost of creating goroutines is justified"
      }), " by the performance improvement."]
    }), "\n", createVNode(_components.p, {
      children: "In this example, the code isn\u2019t more complex when using goroutines therefore it\u2019s worth using them."
    }), "\n", createVNode(_components.h2, {
      id: "code",
      children: "Code"
    }), "\n", createVNode(_components.p, {
      children: ["The code for this article can be found on ", createVNode("a", {
        href: "https://github.com/CorentinGS/go-teaching/tree/main/goroutines_merge_sort",
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
const url = "src/content/blog/mergesort-parallel.mdx";
const file = "/workspaces/corentings.github.io/src/content/blog/mergesort-parallel.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/corentings.github.io/src/content/blog/mergesort-parallel.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
