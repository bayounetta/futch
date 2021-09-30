---
title: Hello World
date: "2019-07-04T00:00:00.0Z"
description:
---

This is my first post on my new blog! I'm mostly making this post here as an example for how blog posts will look! :tada:

![](./images/pixel.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis ante lorem, ut ultricies ex tempor in. Duis in sem a libero viverra sollicitudin eget non enim. Praesent tempor placerat imperdiet. Aliquam et facilisis nisi. Maecenas sit amet lorem aliquet, molestie nisi vitae, vehicula sapien. Vestibulum vel tellus lacinia, rhoncus urna id, vulputate arcu. Ut consectetur ultricies magna. Donec quis lacus eu diam interdum dignissim. Vivamus posuere fringilla elementum. Mauris fermentum, enim in facilisis tempor, lorem eros rutrum sapien, ut consequat orci sem sit amet urna. Vivamus imperdiet nunc id magna euismod, ac malesuada quam maximus.

```css
.page {
  width: 60%;
  padding: 2.6em;
  padding-left: 4em;
  padding-right: 2em;
}
```

Etiam mollis libero sed dolor placerat, sed viverra risus vestibulum. Cras pulvinar nisi lorem, ac ultrices dolor mattis et. In hac habitasse platea dictumst. Suspendisse mollis eleifend feugiat. Suspendisse eleifend risus libero, feugiat tempus diam interdum quis. Praesent a molestie metus. Cras luctus euismod libero, eu mattis dui iaculis quis. Etiam vel iaculis augue. Cras et dignissim eros, quis consectetur lacus. Suspendisse dictum dictum nibh. Integer sodales ante eget laoreet malesuada. Duis tincidunt elit in risus tincidunt, et egestas magna dictum. Nunc accumsan risus vel faucibus ullamcorper. Sed posuere augue nec nibh imperdiet, eu ullamcorper tellus accumsan.

```c
/**
 * File offset and length for tracking access of byte indexes
 */
typedef struct SeenIndex_ {
  struct SeenIndex_* next; /* private field */
  uint32_t offset;         /* offset into archive */
  uint32_t length;         /* length of the data in bytes */
} SeenIndex;

#define TABLESIZE 256

/**
 * Mozilla ARchive (MAR) file data structure
 */
struct MarFile_ {
  FILE* fp;                       /* file pointer to the archive */
  MarItem* item_table[TABLESIZE]; /* hash table of files in the archive */
  SeenIndex* index_list;          /* file indexes processed */
  int item_table_is_valid;        /* header and index validation flag */
};

typedef struct MarFile_ MarFile;
```

```javascript
//ES5 code
function loadFiles( userNames ) {
    for(var i in userNames){
        _fetchProfiles(userNames[i], function() {
            console.log(userNames[i]);
        }
    }
}
loadFiles(["A", "B", "C", "D"]);

console >
D // userNames[4]
D // userNames[4]
D // userNames[4]
D // userNames[4]
```

I'm sure I'll write a lot more interesting things in the future.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis ante lorem, ut ultricies ex tempor in. Duis in sem a libero viverra sollicitudin eget non enim. Praesent tempor placerat imperdiet. Aliquam et facilisis nisi. Maecenas sit amet lorem aliquet, molestie nisi vitae, vehicula sapien. Vestibulum vel tellus lacinia, rhoncus urna id, vulputate arcu. Ut consectetur ultricies magna. Donec quis lacus eu diam interdum dignissim. Vivamus posuere fringilla elementum. Mauris fermentum, enim in facilisis tempor, lorem eros rutrum sapien, ut consequat orci sem sit amet urna. Vivamus imperdiet nunc id magna euismod, ac malesuada quam maximus.

Etiam mollis libero sed dolor placerat, sed viverra risus vestibulum. Cras pulvinar nisi lorem, ac ultrices dolor mattis et. In hac habitasse platea dictumst. Suspendisse mollis eleifend feugiat. Suspendisse eleifend risus libero, feugiat tempus diam interdum quis. Praesent a molestie metus. Cras luctus euismod libero, eu mattis dui iaculis quis. Etiam vel iaculis augue. Cras et dignissim eros, quis consectetur lacus. Suspendisse dictum dictum nibh. Integer sodales ante eget laoreet malesuada. Duis tincidunt elit in risus tincidunt, et egestas magna dictum. Nunc accumsan risus vel faucibus ullamcorper. Sed posuere augue nec nibh imperdiet, eu ullamcorper tellus accumsan.

```javascript
//ES6 code
function loadFiles( userNames ){
    for( let i in userNames ){
        _fetchProfile(userNames[i], function(){
            console.log(userNames[i]);
        }
    }
}
loadFiles(["A", "B", "C", "D"]);

console >
A // userNames[1]
B // userNames[2]
C // userNames[3]
D // userNames[4]
```

### let cannot be redeclared

Phasellus eget bibendum metus, quis consequat ex. Sed ipsum lectus, congue semper iaculis non, accumsan ac dolor. Cras venenatis euismod eros. Maecenas eget leo leo. Donec sit amet augue vitae eros rhoncus elementum vitae non odio. In hac habitasse platea dictumst. Integer dolor sem, tincidunt vitae euismod sit amet, euismod a elit. Donec commodo ac justo vel ullamcorper. Donec id urna sit amet lacus tempus molestie. Etiam nec lacus nec lacus interdum euismod vulputate non tortor. Etiam nulla lorem, molestie ut dapibus dictum, molestie ac leo. Cras odio ipsum, hendrerit mattis tempus id, maximus non quam. Maecenas quam ipsum, porta et massa a, bibendum condimentum mauris. Duis ac tristique massa, vel eleifend dolor.

Vestibulum venenatis tortor quis congue euismod. Etiam nec bibendum dui. Aliquam id mollis metus. Nam varius eros finibus mi tincidunt, at varius justo vulputate. Aenean lobortis tellus vel urna vehicula hendrerit. Nunc consequat elit quis bibendum varius. Pellentesque euismod pretium sapien, placerat scelerisque elit efficitur non. Cras tincidunt lectus et magna fermentum, ac placerat nulla dapibus. Pellentesque ultricies accumsan scelerisque.

Pellentesque feugiat diam at nunc volutpat ullamcorper. Etiam diam nulla, tincidunt ac justo et, sollicitudin consequat tellus. Vestibulum porta urna eget ipsum mattis rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec pellentesque arcu nibh, eget dictum elit vehicula ac. Fusce at euismod nunc. Vivamus nec tellus ullamcorper, tempus lectus sed, viverra sem. Pellentesque ultricies sem suscipit urna feugiat, condimentum tincidunt justo ullamcorper. Donec vitae dolor eget justo iaculis congue.

```rust
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

// This is a really bad adding function, its purpose is to fail in this
// example.
#[allow(dead_code)]
fn bad_add(a: i32, b: i32) -> i32 {
    a - b
}

#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(add(1, 2), 3);
    }

    #[test]
    fn test_bad_add() {
        // This assert would fire and test will fail.
        // Please note, that private functions can be tested too!
        assert_eq!(bad_add(1, 2), 3);
    }
}
```

Phasellus eget bibendum metus, quis consequat ex. Sed ipsum lectus, congue semper iaculis non, accumsan ac dolor. Cras venenatis euismod eros. Maecenas eget leo leo. Donec sit amet augue vitae eros rhoncus elementum vitae non odio. In hac habitasse platea dictumst. Integer dolor sem, tincidunt vitae euismod sit amet, euismod a elit. Donec commodo ac justo vel ullamcorper. Donec id urna sit amet lacus tempus molestie. Etiam nec lacus nec lacus interdum euismod vulputate non tortor. Etiam nulla lorem, molestie ut dapibus dictum, molestie ac leo. Cras odio ipsum, hendrerit mattis tempus id, maximus non quam. Maecenas quam ipsum, porta et massa a, bibendum condimentum mauris. Duis ac tristique massa, vel eleifend dolor.

Vestibulum venenatis tortor quis congue euismod. Etiam nec bibendum dui. Aliquam id mollis metus. Nam varius eros finibus mi tincidunt, at varius justo vulputate. Aenean lobortis tellus vel urna vehicula hendrerit. Nunc consequat elit quis bibendum varius. Pellentesque euismod pretium sapien, placerat scelerisque elit efficitur non. Cras tincidunt lectus et magna fermentum, ac placerat nulla dapibus. Pellentesque ultricies accumsan scelerisque.

Pellentesque feugiat diam at nunc volutpat ullamcorper. Etiam diam nulla, tincidunt ac justo et, sollicitudin consequat tellus. Vestibulum porta urna eget ipsum mattis rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec pellentesque arcu nibh, eget dictum elit vehicula ac. Fusce at euismod nunc. Vivamus nec tellus ullamcorper, tempus lectus sed, viverra sem. Pellentesque ultricies sem suscipit urna feugiat, condimentum tincidunt justo ullamcorper. Donec vitae dolor eget justo iaculis congue.
