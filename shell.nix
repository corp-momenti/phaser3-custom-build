with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "node";
    buildInputs = [
        yarn
        nodejs-12_x
    ];
    shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
    '';
}
