const id = "optimizing-goroutines-sum-of-squares.mdx";
						const collection = "blog";
						const slug = "optimizing-goroutines-sum-of-squares";
						const body = "\n## Disclaimer: Enhancing Algorithm Discussions\n\nBefore delving into the main topic, I want to express my respect for the original post's intent.\nMy response aims to provide slight corrections that can benefit readers seeking accurate information. In the spirit of shared learning, I intend to contribute constructively rather than criticize. <br />Clarifications and alternative viewpoints can foster a deeper understanding of complex concepts. Let's continue engaging in open discussions, embracing diverse insights as we collectively refine our knowledge.\n\n<br />\n\n## Introduction\n\nGreetings, fellow Gophers! Are you ready to explore the intriguing world of Goroutines and unravel the mysteries of the sum of squares problem?\nRecently, a friend learning Go shared a <a href={'https://medium.com/@ShivamSouravJha/golang-only-things-i-know-for-the-interview-4322d29d67a3'} class=\"font-bold underline text-accent\" target=\"_blank\" rel=\"noopener\">medium article</a> with me.\nIt discussed Goroutines and how they can be used to solve a simple problem: calculating the sum of square numbers in a given array.\n\nIn this blog post, we'll delve into how Goroutines, channels, and data structures in Golang can be utilized to tackle the sum of squares problem. We'll also discuss common pitfalls and inefficient practices that can hinder performance.\nFear not, my friends, for we shall also unveil secrets to optimizing your code and achieving exceptional performance. So, let's embark on this quest together!\n\n<br />\n\n## The Sum of Squares Problem: A simple problem\n\nThe medium article of my friend addressed the following problem:  \"6. Write a program that returns the sum of the squares of each element of an array in Golang.\"\n\nEasy enough. We need to iterate through every element in the array and add the square of each one.\n\n```go\nfunc simpleSumSquare(items []int) int {\n\ttotal := 0 // total sum\n\tfor i := 0; i < len(items); i++ {\n\t\ttotal += items[i] * items[i] // square the item and add it to the total\n\t}\n\treturn total // return the total sum\n}\n```\n\nCan we simplify it further? The code is reasonably straightforward. However, can we make it faster?\n\n<br />\n\n## Goroutines: Harnessing the Power of Concurrency\n\nGoroutines, the superheroes of Golang, are lightweight threads that enable concurrent task execution.\nBy utilizing Goroutines, we can execute multiple functions simultaneously, making our code more efficient and faster. But, with great power comes great responsibility.<br />\nOne common mistake in solving the sum of squares problem is the improper use of Goroutines.\nSome developers create too many Goroutines without proper synchronization, leading to chaos and incorrect results.\nRemember, coordination is crucial!\n\n<br />\n\n## Goroutines: Common pitfall\n\nWhen solving the sum of squares problem, the choice of algorithm and data structures significantly impacts performance.\nThe aforementioned medium blog post highlights the use of Goroutines and their potential to substantially improve performance.\n\n```go\nfunc sumSquare(items []int) int {\n\tnumber := make(chan int)   // channel for sending numbers\n\tresponse := make(chan int) // channel for receiving responses\n\n\tvar wg sync.WaitGroup // wait group for waiting for all goroutines to finish\n\n\ttotal := 0 // total sum\n\n\t// Create a goroutine for each item in the slice\n\tfor _, item := range items {\n\t\twg.Add(1)           // increment the wait group counter\n\t\tgo func(item int) { // create a goroutine\n\t\t\tdefer wg.Done()    // decrement the wait group counter when the goroutine finishes\n\t\t\tsum1 := <-number   // receive a number from the number channel\n\t\t\tsum1 = sum1 * sum1 // square the number\n\t\t\tresponse <- sum1   // send the result to the response channel\n\t\t}(item) // pass the item to the goroutine\n\t\tnumber <- item      // send the item to the number channel\n\t\ttotal += <-response // receive the result from the response channel\n\t}\n\n\tdefer close(number)   // close the number channel\n\tdefer close(response) // close the response channel\n\n\twg.Wait() // wait for all goroutines to finish\n\n\treturn total // return the total sum\n}\n```\n\nThis code creates a new goroutine for each item in the array and then performs the squaring operation. It uses channels to pass values between the goroutine and the main thread.\n\nHowever, is this code correct? As discussed in  <a href={'../mergesort-parallel'} class=\"font-bold underline text-accent\" target=\"_blank\" rel=\"prefetch noopener\">my previous blog post about the mergesort algorithm</a>, there are better practices than spawning numerous goroutines.\nMore than being lightweight is needed to justify using many goroutines; it still uses memory and time, and we must be cautious.\n\nAs always, let's benchmark the code!\n\n<br />\n\n## Benchmarking: The Quest for Ultimate Performance\n\nBenchmarking lets us measure code performance and compare implementations to identify the best.\n\nWith Golang's built-in benchmarking tools, we can easily measure the execution time of our code and identify bottlenecks. By tweaking our implementation and experimenting with different approaches, we can achieve optimal performance and revel in our achievements.\n\nHence, I've created a small function to benchmark our algorithms using randomly generated arrays of varying sizes to observe their performance at different scales:\n\n```go\nfunc benchmarkFramework(b *testing.B, sumFunction func([]int) int) {\n\tsizes := [][]int{RandomArray(100, 0, 100),\n\t\tRandomArray(1000, 0, 1000),\n\t\tRandomArray(10000, 0, 10000),\n\t\tRandomArray(100000, 0, 100000),\n\t\tRandomArray(1000000, 0, 1000000),\n\t}\n\tb.ResetTimer()\n\tfor _, size := range sizes {\n\t\tb.Run(fmt.Sprintf(\"%d\", len(size)), func(b *testing.B) {\n\t\t\tfor i := 0; i < b.N; i++ {\n\t\t\t\tsumFunction(size)\n\t\t\t}\n\t\t})\n\t}\n}\n```\n\nHere are the results:\n\n|           name          | time/op |\n| :---------------------: | :-----: |\n|   SimpleSumSquare/100   |  49.5ns |\n|   SimpleSumSquare/1000  |  450ns  |\n|  SimpleSumSquare/10000  |  4.41µs |\n|  SimpleSumSquare/100000 |  43.8µs |\n| SimpleSumSquare/1000000 |  437µs  |\n|            .            |         |\n|      SumSquare/100      |  75.2µs |\n|      SumSquare/1000     |  730µs  |\n|     SumSquare/10000     |  7.24ms |\n|     SumSquare/100000    |  72.4ms |\n|    SumSquare/1000000    |  739ms  |\n\n<br />\n\nAs we can see, the simple algorithm outperforms the complex one! Why? Because spawning too many Goroutines slows down the program and consumes a significant amount of memory.\n\n<br />\n\n## Data Structures & Algorithms: Choose Wisely\n\nWhen solving the sum of squares problem, the choice of data structures and algorithms significantly impacts performance.\n\nI decided to develop a more efficient function. Consequently, I utilized chunks and a Goroutine pool.\n\nA goroutines pool manages a set number of reusable goroutines, reducing overhead in concurrent programs. Chunks break data into segments for parallel processing, optimizing resource use, and enhancing efficiency. Combining these techniques streamlines parallelism, maximizing concurrency benefits.\n\nHere is my code:\n\n```go\nfunc simpleParallelSumSquare(items []int) int {\n\tconst chunkSize = 10000\n\n\tif len(items) <= 10000 { // Threshold for small slices\n\t\treturn simpleSumSquare(items) // Use the simpleSumSquare function\n\t}\n\n\t// Divide the items into chunks\n\tchunks := make([][]int, 0)\n\tfor i := 0; i < len(items); i += chunkSize {\n\t\tend := i + chunkSize // end index for the chunk\n\t\tif end > len(items) {\n\t\t\tend = len(items) // last chunk may be smaller than chunkSize\n\t\t}\n\t\tchunks = append(chunks, items[i:end]) // append the chunk to the chunks slice\n\t}\n\n\t// Create a goroutine for each chunk\n\twg := sync.WaitGroup{}\n\tresultChan := make(chan int, len(chunks)) // channel for receiving results\n\n\tfor _, chunk := range chunks { // iterate over the chunks\n\t\twg.Add(1)              // increment the wait group counter\n\t\tgo func(chunk []int) { // create a goroutine\n\t\t\tresultChan <- simpleSumSquare(chunk) // send the result to the result channel\n\t\t\twg.Done()                            // decrement the wait group counter when the goroutine finishes\n\t\t}(chunk) // pass the chunk to the goroutine\n\t}\n\n\twg.Wait()         // Wait for all goroutines to finish\n\tclose(resultChan) // close the result channel\n\n\t// Sum the results\n\ttotal := 0\n\tfor partialSum := range resultChan {\n\t\ttotal += partialSum\n\t}\n\n\treturn total // return the total sum\n}\n```\n\nCan this code be improved further? I could reduce the number of allocations and enhance performance. However, I opted for simplicity to better illustrate pitfalls and good practices related to Goroutines.\n\nIs it genuinely efficient? Let's benchmark it, as always!\n\n|               name              | time/op |\n| :-----------------------------: | :-----: |\n|       SimpleSumSquare/100       |  49.5ns |\n|       SimpleSumSquare/1000      |  450ns  |\n|      SimpleSumSquare/10000      |  4.41µs |\n|      SimpleSumSquare/100000     |  43.8µs |\n|     SimpleSumSquare/1000000     |  437µs  |\n|                .                |         |\n|          SumSquare/100          |  75.2µs |\n|          SumSquare/1000         |  730µs  |\n|         SumSquare/10000         |  7.24ms |\n|         SumSquare/100000        |  72.4ms |\n|        SumSquare/1000000        |  739ms  |\n|                .                |         |\n|   SimpleParallelSumSquare/100   |  49.5ns |\n|   SimpleParallelSumSquare/1000  |  450ns  |\n|  SimpleParallelSumSquare/10000  |  4.41µs |\n|  SimpleParallelSumSquare/100000 |  18.0µs |\n| SimpleParallelSumSquare/1000000 |  67.2µs |\n\n<br />\n\nAs we can observe, our new code is significantly faster!\n\n## Pitfalls and Bad Practices: The Road to Destruction\n\nAh, the treacherous road of pitfalls and bad practices. One common mistake is the excessive creation and destruction of Goroutines.\nCreating Goroutines carries a cost; making too many can slow your program and consume unnecessary resources.\n\n<br />\n\nFurthermore, we can use unsafe features to improve our code's performance but must not sacrifice maintainability and safety for speed if it's not really required.\nIf you want to learn more about unsafe features available on Golang, you can look at the code published <a href={'https://github.com/CorentinGS/go-teaching/tree/main/goroutines_sum_square'} class=\"font-bold underline text-accent\" target=\"_blank\" rel=\"noopener nofollow\"> here on my Github </a>.\n\n## Conclusion: The Sum of Success\n\nCongratulations, my friends! We've journeyed through Goroutines, channels, and data structures, conquering the sum of squares problem.\nWe've learned from our mistakes, optimized our code, and achieved top-notch performance.\n\nBut remember, the pursuit of knowledge is everlasting.\nKeep exploring, experimenting, and pushing the boundaries of what's possible. And always remember, with great power comes great responsibility.\nSo go forth, my fellow Gophers, may your code be swift, your bugs be few, and your adventures be legendary!\n\n<br />\n\n## References\n\n* <a href={\"https://medium.com/@ShivamSouravJha/golang-only-things-i-know-for-the-interview-4322d29d67a3\"} class=\"font-bold underline text-accent\" target=\"_blank\" rel=\"noopener nofollow\">Medium article</a>\n* <a href=\"https://github.com/CorentinGS/go-teaching/tree/main/goroutines_sum_square\" class=\"font-bold underline text-accent\" target=\"_blank\" rel=\"noopener\">Code snippets</a>\n";
						const data = {title:"Solving the Sum of Squares Problem: Optimizing Performance",description:"Discover how to optimize performance, avoid common pitfalls, and achieve top-notch results. Ready to conquer the challenges? Let's go!",pubDate:new Date(1691618400000),heroImage:
						new Proxy({"src":"/_astro/optimizing-goroutines-sum-of-squares.BtZ1W1eJ.webp","width":626,"height":1115,"format":"webp","fsPath":"/workspaces/corentings.github.io/src/assets/blog/optimizing-goroutines-sum-of-squares.webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/corentings.github.io/src/assets/blog/optimizing-goroutines-sum-of-squares.webp";
							}
							
							return target[name];
						}
					})
					,category:"Programming",tags:["Algorithm","Golang"],draft:false};
						const _internal = {
							type: 'content',
							filePath: "/workspaces/corentings.github.io/src/content/blog/optimizing-goroutines-sum-of-squares.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
