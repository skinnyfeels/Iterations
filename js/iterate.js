/*
Iterations 2.1 js file
author: Skinny Feels
website: https://mrSkinnyFeels.com
*/
var $ = jQuery;
$(document).ready(function() {
    var textArray = [
            '<h3>Entropy</h3><p>Introduce corruption.</p>',
            '<h3>Chorus</h3><p>Repeat motifs.</p>',
            '<h3>Echo</h3><p>Repeat. Again and again, but less and less.</p>',
            '<h3>Enhance</h3><p>Furnish with elements of beauty.</p>',
            '<h3>Possess</h3><p>Imbibe with the spirit of a personal hero.</p>',
            '<h3>Explode</h3><p>Fragment into disorganised parts.</p>',
            '<h3>Remix</h3><p>Combine all the previous.</p>',
            '<h3>Respawn</h3><p>Re-create all in a new way.</p>',
            '<h3>Abort</h3><p>Prematurely complete. End here.</p>',
            '<h3>Drug</h3><p>Apply the effects of legal and non-legal intoxications.</p>',
            '<h3>Distort</h3><p>Next card only affects one part.</p>',
            '<h3>Copy</h3><p>Duplicate. Duplicate.</p>',
            '<h3>Purify</h3><p>Remove the unnecessary.</p>',
            '<h3>Shuffle</h3><p>Disorder.</p>',
            '<h3>Compress</h3><p>Remove excessive aspects.</p>',
            '<h3>Equalise</h3><p>Assign same value of importance to all.</p>',
            '<h3>Pastlife</h3><p>Re-do but inspired by a different time period.</p>',
            '<h3>Loop</h3><p>Repeat last card. Again.</p>',
            '<h3>Sample</h3><p>Add a part back into the part.</p>',
            '<h3>Purge</h3><p>Remove all useful parts.</p>',
            '<h3>Bounce</h3><p>Re-do as the absolute opposite.</p>',
            '<h3>Cut</h3><p>Remove section.</p>',
            '<h3>Thompson</h3><p>Encourage craziness.</p>',
            '<h3>Delicate</h3><p>Like a leaf on the wind.</p>',
            '<h3>Order</h3><p>Logical, linear, layout.</p>',
            '<h3>Force</h3><p>Complicate to the point of unusability.</p>',
            '<h3>Ghost</h3><p>Echo a classic.</p>',
            '<h3>Lax</h3><p>Be lazy about the process.</p>',
            '<h3>Lifeline</h3><p>Get a colleague to do it for you.</p>',
            '<h3>Disguise</h3><p>Make it appear as something else.</p>',
            '<h3>Lobotomise</h3><p>Remove all complications.</p>',
            '<h3>Split Signal</h3><p>Create two each containing half the original.</p>',
            '<h3>Clean</h3><p>Lighten ideas, soften feelings, smooooth.</p>',
            '<h3>Dirt</h3><p>Darken ideas, harden feelings, roughen.</p>',
            '<h3>Lynch</h3><p>Encourage harmonius whole.</p>',
            '<h3>Dali</h3><p>Encourage surrealism.</p>',
            '<h3>Fuzz</h3><p>Soften sharpness. Smooth edges.</p>',
            '<h3>Virus</h3><p>Grow several new  from each part of the current.</p>',
            '<h3>Replace</h3><p>Replace part with another part.</p>',
            '<h3>Overdrive</h3><p>Generate ten ideas in twenty minutes.</p>',
            '<h3>Reverb</h3><p>Remove main leaving only associated affectations.</p>',
            '<h3>Saturate</h3><p>Re-do using five more cards.</p>',
            '<h3>Blur</h3><p>Blend all parts together.</p>',
            '<h3>Dodge</h3><p>Remove extra detail.</p>',
            '<h3>Burn</h3><p>Apply extra detail.</p>'
        ];

    $('#randomizer').randomText(textArray, 1000000, ); // ( array, interval, ["reload text or html"] )
});
// custom jquery plugin loadText()
$.fn.randomText = function( textArray, interval, randomEle, prevText ) {
    var obj = $(this);
    if( $('#text-content').length == 0 ){ obj.append('<div id="text-content">'); }
    var textCont = $('#text-content');
    if( typeof randomEle != 'undefined' ){ if( $('#randomizer').length == 0 ){ obj.append('<a href="javascript:;" id="randomizer"><em>' + randomEle ); } }
    textCont.fadeOut( 'slow', function() {
        var chosenText = random_array( textArray );
        while( chosenText == prevText ) { chosenText = random_array( textArray ); }
        textCont.empty().html( chosenText );
        textCont.fadeIn( 'slow' );
        sendText = chosenText;
    });
    timeOut = setTimeout( function(){ obj.randomText( textArray, interval, randomEle, sendText ); }, interval );
    $("#randomizer").click( function(){
        if( !textCont.is(':animated') ) { clearTimeout( timeOut ); obj.randomText( textArray, interval, randomEle, sendText );} // animation check prevents "too much recursion" error in jQuery 
    });
}
//public function
function random_array( aArray ) {
    var rand = Math.floor( Math.random() * aArray.length + aArray.length );
    var randArray = aArray[ rand - aArray.length ];
    return randArray;
}
