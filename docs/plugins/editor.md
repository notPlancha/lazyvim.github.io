# Editor

<!-- plugins:start -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim)

 file explorer


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  filesystem = {
    bind_to_cwd = false,
    follow_current_file = true,
  },
  window = {
    mappings = {
      ["<space>"] = "none",
    },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-neo-tree/neo-tree.nvim",
  cmd = "Neotree",
  keys = {
    {
      "<leader>fe",
      function()
        require("neo-tree.command").execute({ toggle = true, dir = require("lazyvim.util").get_root() })
      end,
      desc = "Explorer NeoTree (root dir)",
    },
    {
      "<leader>fE",
      function()
        require("neo-tree.command").execute({ toggle = true, dir = vim.loop.cwd() })
      end,
      desc = "Explorer NeoTree (cwd)",
    },
    { "<leader>e", "<leader>fe", desc = "Explorer NeoTree (root dir)", remap = true },
    { "<leader>E", "<leader>fE", desc = "Explorer NeoTree (cwd)", remap = true },
  },
  deactivate = function()
    vim.cmd([[Neotree close]])
  end,
  init = function()
    vim.g.neo_tree_remove_legacy_commands = 1
    if vim.fn.argc() == 1 then
      local stat = vim.loop.fs_stat(vim.fn.argv(0))
      if stat and stat.type == "directory" then
        require("neo-tree")
      end
    end
  end,
  opts = {
    filesystem = {
      bind_to_cwd = false,
      follow_current_file = true,
    },
    window = {
      mappings = {
        ["<space>"] = "none",
      },
    },
  },
}
```

</TabItem>

</Tabs>

## [nvim-spectre](https://github.com/windwp/nvim-spectre)

 search/replace in multiple files


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "windwp/nvim-spectre",
  -- stylua: ignore
  keys = {
    { "<leader>sr", function() require("spectre").open() end, desc = "Replace in files (Spectre)" },
  },
}
```

</TabItem>

</Tabs>

## [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim)

 fuzzy finder


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  defaults = {
    prompt_prefix = " ",
    selection_caret = " ",
    mappings = {
      i = {
        ["<c-t>"] = function(...)
          return require("trouble.providers.telescope").open_with_trouble(...)
        end,
        ["<a-i>"] = function()
          Util.telescope("find_files", { no_ignore = true })()
        end,
        ["<a-h>"] = function()
          Util.telescope("find_files", { hidden = true })()
        end,
        ["<C-Down>"] = function(...)
          return require("telescope.actions").cycle_history_next(...)
        end,
        ["<C-Up>"] = function(...)
          return require("telescope.actions").cycle_history_prev(...)
        end,
        ["<C-f>"] = function(...)
          return require("telescope.actions").preview_scrolling_down(...)
        end,
        ["<C-b>"] = function(...)
          return require("telescope.actions").preview_scrolling_up(...)
        end,
      },
      n = {
        ["q"] = function(...)
          return require("telescope.actions").close(...)
        end,
      },
    },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-telescope/telescope.nvim",
  cmd = "Telescope",
  version = false, -- telescope did only one release, so use HEAD for now
  keys = {
    { "<leader>,", "<cmd>Telescope buffers show_all_buffers=true<cr>", desc = "Switch Buffer" },
    { "<leader>/", Util.telescope("live_grep"), desc = "Find in Files (Grep)" },
    { "<leader>:", "<cmd>Telescope command_history<cr>", desc = "Command History" },
    { "<leader><space>", Util.telescope("files"), desc = "Find Files (root dir)" },
    -- find
    { "<leader>fb", "<cmd>Telescope buffers<cr>", desc = "Buffers" },
    { "<leader>ff", Util.telescope("files"), desc = "Find Files (root dir)" },
    { "<leader>fF", Util.telescope("files", { cwd = false }), desc = "Find Files (cwd)" },
    { "<leader>fr", "<cmd>Telescope oldfiles<cr>", desc = "Recent" },
    -- git
    { "<leader>gc", "<cmd>Telescope git_commits<CR>", desc = "commits" },
    { "<leader>gs", "<cmd>Telescope git_status<CR>", desc = "status" },
    -- search
    { "<leader>sa", "<cmd>Telescope autocommands<cr>", desc = "Auto Commands" },
    { "<leader>sb", "<cmd>Telescope current_buffer_fuzzy_find<cr>", desc = "Buffer" },
    { "<leader>sc", "<cmd>Telescope command_history<cr>", desc = "Command History" },
    { "<leader>sC", "<cmd>Telescope commands<cr>", desc = "Commands" },
    { "<leader>sd", "<cmd>Telescope diagnostics<cr>", desc = "Diagnostics" },
    { "<leader>sg", Util.telescope("live_grep"), desc = "Grep (root dir)" },
    { "<leader>sG", Util.telescope("live_grep", { cwd = false }), desc = "Grep (cwd)" },
    { "<leader>sh", "<cmd>Telescope help_tags<cr>", desc = "Help Pages" },
    { "<leader>sH", "<cmd>Telescope highlights<cr>", desc = "Search Highlight Groups" },
    { "<leader>sk", "<cmd>Telescope keymaps<cr>", desc = "Key Maps" },
    { "<leader>sM", "<cmd>Telescope man_pages<cr>", desc = "Man Pages" },
    { "<leader>sm", "<cmd>Telescope marks<cr>", desc = "Jump to Mark" },
    { "<leader>so", "<cmd>Telescope vim_options<cr>", desc = "Options" },
    { "<leader>sw", Util.telescope("grep_string"), desc = "Word (root dir)" },
    { "<leader>sW", Util.telescope("grep_string", { cwd = false }), desc = "Word (cwd)" },
    { "<leader>uC", Util.telescope("colorscheme", { enable_preview = true }), desc = "Colorscheme with preview" },
    {
      "<leader>ss",
      Util.telescope("lsp_document_symbols", {
        symbols = {
          "Class",
          "Function",
          "Method",
          "Constructor",
          "Interface",
          "Module",
          "Struct",
          "Trait",
          "Field",
          "Property",
        },
      }),
      desc = "Goto Symbol",
    },
  },
  opts = {
    defaults = {
      prompt_prefix = " ",
      selection_caret = " ",
      mappings = {
        i = {
          ["<c-t>"] = function(...)
            return require("trouble.providers.telescope").open_with_trouble(...)
          end,
          ["<a-i>"] = function()
            Util.telescope("find_files", { no_ignore = true })()
          end,
          ["<a-h>"] = function()
            Util.telescope("find_files", { hidden = true })()
          end,
          ["<C-Down>"] = function(...)
            return require("telescope.actions").cycle_history_next(...)
          end,
          ["<C-Up>"] = function(...)
            return require("telescope.actions").cycle_history_prev(...)
          end,
          ["<C-f>"] = function(...)
            return require("telescope.actions").preview_scrolling_down(...)
          end,
          ["<C-b>"] = function(...)
            return require("telescope.actions").preview_scrolling_up(...)
          end,
        },
        n = {
          ["q"] = function(...)
            return require("telescope.actions").close(...)
          end,
        },
      },
    },
  },
}
```

</TabItem>

</Tabs>

## [flit.nvim](https://github.com/ggandor/flit.nvim)

 easily jump to any location and enhanced f/t motions for Leap


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { labeled_modes = "nx" }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "ggandor/flit.nvim",
  keys = function()
    ---@type LazyKeys[]
    local ret = {}
    for _, key in ipairs({ "f", "F", "t", "T" }) do
      ret[#ret + 1] = { key, mode = { "n", "x", "o" }, desc = key }
    end
    return ret
  end,
  opts = { labeled_modes = "nx" },
}
```

</TabItem>

</Tabs>

## [leap.nvim](https://github.com/ggandor/leap.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "ggandor/leap.nvim",
  keys = {
    { "s", mode = { "n", "x", "o" }, desc = "Leap forward to" },
    { "S", mode = { "n", "x", "o" }, desc = "Leap backward to" },
    { "gs", mode = { "n", "x", "o" }, desc = "Leap from windows" },
  },
  config = function(_, opts)
    local leap = require("leap")
    for k, v in pairs(opts) do
      leap.opts[k] = v
    end
    leap.add_default_mappings(true)
    vim.keymap.del({ "x", "o" }, "x")
    vim.keymap.del({ "x", "o" }, "X")
  end,
}
```

</TabItem>

</Tabs>

## [which-key.nvim](https://github.com/folke/which-key.nvim)

 which-key


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  plugins = { spelling = true },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/which-key.nvim",
  event = "VeryLazy",
  opts = {
    plugins = { spelling = true },
  },
  config = function(_, opts)
    local wk = require("which-key")
    wk.setup(opts)
    local keymaps = {
      mode = { "n", "v" },
      ["g"] = { name = "+goto" },
      ["gz"] = { name = "+surround" },
      ["]"] = { name = "+next" },
      ["["] = { name = "+prev" },
      ["<leader><tab>"] = { name = "+tabs" },
      ["<leader>b"] = { name = "+buffer" },
      ["<leader>c"] = { name = "+code" },
      ["<leader>f"] = { name = "+file/find" },
      ["<leader>g"] = { name = "+git" },
      ["<leader>gh"] = { name = "+hunks" },
      ["<leader>q"] = { name = "+quit/session" },
      ["<leader>s"] = { name = "+search" },
      ["<leader>u"] = { name = "+ui" },
      ["<leader>w"] = { name = "+windows" },
      ["<leader>x"] = { name = "+diagnostics/quickfix" },
    }
    if Util.has("noice.nvim") then
      keymaps["<leader>sn"] = { name = "+noice" }
    end
    wk.register(keymaps)
  end,
}
```

</TabItem>

</Tabs>

## [gitsigns.nvim](https://github.com/lewis6991/gitsigns.nvim)

 git signs


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  signs = {
    add = { text = "▎" },
    change = { text = "▎" },
    delete = { text = "契" },
    topdelete = { text = "契" },
    changedelete = { text = "▎" },
    untracked = { text = "▎" },
  },
  on_attach = function(buffer)
    local gs = package.loaded.gitsigns

    local function map(mode, l, r, desc)
      vim.keymap.set(mode, l, r, { buffer = buffer, desc = desc })
    end

    -- stylua: ignore start
    map("n", "]h", gs.next_hunk, "Next Hunk")
    map("n", "[h", gs.prev_hunk, "Prev Hunk")
    map({ "n", "v" }, "<leader>ghs", ":Gitsigns stage_hunk<CR>", "Stage Hunk")
    map({ "n", "v" }, "<leader>ghr", ":Gitsigns reset_hunk<CR>", "Reset Hunk")
    map("n", "<leader>ghS", gs.stage_buffer, "Stage Buffer")
    map("n", "<leader>ghu", gs.undo_stage_hunk, "Undo Stage Hunk")
    map("n", "<leader>ghR", gs.reset_buffer, "Reset Buffer")
    map("n", "<leader>ghp", gs.preview_hunk, "Preview Hunk")
    map("n", "<leader>ghb", function() gs.blame_line({ full = true }) end, "Blame Line")
    map("n", "<leader>ghd", gs.diffthis, "Diff This")
    map("n", "<leader>ghD", function() gs.diffthis("~") end, "Diff This ~")
    map({ "o", "x" }, "ih", ":<C-U>Gitsigns select_hunk<CR>", "GitSigns Select Hunk")
  end,
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "lewis6991/gitsigns.nvim",
  event = { "BufReadPre", "BufNewFile" },
  opts = {
    signs = {
      add = { text = "▎" },
      change = { text = "▎" },
      delete = { text = "契" },
      topdelete = { text = "契" },
      changedelete = { text = "▎" },
      untracked = { text = "▎" },
    },
    on_attach = function(buffer)
      local gs = package.loaded.gitsigns

      local function map(mode, l, r, desc)
        vim.keymap.set(mode, l, r, { buffer = buffer, desc = desc })
      end

      -- stylua: ignore start
      map("n", "]h", gs.next_hunk, "Next Hunk")
      map("n", "[h", gs.prev_hunk, "Prev Hunk")
      map({ "n", "v" }, "<leader>ghs", ":Gitsigns stage_hunk<CR>", "Stage Hunk")
      map({ "n", "v" }, "<leader>ghr", ":Gitsigns reset_hunk<CR>", "Reset Hunk")
      map("n", "<leader>ghS", gs.stage_buffer, "Stage Buffer")
      map("n", "<leader>ghu", gs.undo_stage_hunk, "Undo Stage Hunk")
      map("n", "<leader>ghR", gs.reset_buffer, "Reset Buffer")
      map("n", "<leader>ghp", gs.preview_hunk, "Preview Hunk")
      map("n", "<leader>ghb", function() gs.blame_line({ full = true }) end, "Blame Line")
      map("n", "<leader>ghd", gs.diffthis, "Diff This")
      map("n", "<leader>ghD", function() gs.diffthis("~") end, "Diff This ~")
      map({ "o", "x" }, "ih", ":<C-U>Gitsigns select_hunk<CR>", "GitSigns Select Hunk")
    end,
  },
}
```

</TabItem>

</Tabs>

## [vim-illuminate](https://github.com/RRethy/vim-illuminate)

 references


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { delay = 200 }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "RRethy/vim-illuminate",
  event = { "BufReadPost", "BufNewFile" },
  opts = { delay = 200 },
  config = function(_, opts)
    require("illuminate").configure(opts)
    vim.api.nvim_create_autocmd("FileType", {
      callback = function()
        local buffer = vim.api.nvim_get_current_buf()
        pcall(vim.keymap.del, "n", "]]", { buffer = buffer })
        pcall(vim.keymap.del, "n", "[[", { buffer = buffer })
      end,
    })
  end,
  -- stylua: ignore
  keys = {
    { "]]", function() require("illuminate").goto_next_reference(false) end, desc = "Next Reference", },
    { "[[", function() require("illuminate").goto_prev_reference(false) end, desc = "Prev Reference" },
  },
}
```

</TabItem>

</Tabs>

## [mini.bufremove](https://github.com/echasnovski/mini.bufremove)

 buffer remove


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "echasnovski/mini.bufremove",
  -- stylua: ignore
  keys = {
    { "<leader>bd", function() require("mini.bufremove").delete(0, false) end, desc = "Delete Buffer" },
    { "<leader>bD", function() require("mini.bufremove").delete(0, true) end, desc = "Delete Buffer (Force)" },
  },
}
```

</TabItem>

</Tabs>

## [trouble.nvim](https://github.com/folke/trouble.nvim)

 better diagnostics list and others


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { use_diagnostic_signs = true }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/trouble.nvim",
  cmd = { "TroubleToggle", "Trouble" },
  opts = { use_diagnostic_signs = true },
  keys = {
    { "<leader>xx", "<cmd>TroubleToggle document_diagnostics<cr>", desc = "Document Diagnostics (Trouble)" },
    { "<leader>xX", "<cmd>TroubleToggle workspace_diagnostics<cr>", desc = "Workspace Diagnostics (Trouble)" },
    { "<leader>xL", "<cmd>TroubleToggle loclist<cr>", desc = "Location List (Trouble)" },
    { "<leader>xQ", "<cmd>TroubleToggle quickfix<cr>", desc = "Quickfix List (Trouble)" },
  },
}
```

</TabItem>

</Tabs>

## [todo-comments.nvim](https://github.com/folke/todo-comments.nvim)

 todo comments


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/todo-comments.nvim",
  cmd = { "TodoTrouble", "TodoTelescope" },
  event = { "BufReadPost", "BufNewFile" },
  config = true,
  -- stylua: ignore
  keys = {
    { "]t", function() require("todo-comments").jump_next() end, desc = "Next todo comment" },
    { "[t", function() require("todo-comments").jump_prev() end, desc = "Previous todo comment" },
    { "<leader>xt", "<cmd>TodoTrouble<cr>", desc = "Todo (Trouble)" },
    { "<leader>xT", "<cmd>TodoTrouble keywords=TODO,FIX,FIXME<cr>", desc = "Todo/Fix/Fixme (Trouble)" },
    { "<leader>st", "<cmd>TodoTelescope<cr>", desc = "Todo" },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
