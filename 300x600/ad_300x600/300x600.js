(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.SantanderInternationalpos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC0000").s().p("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");
	this.shape.setTransform(150,45.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.SantanderInternationalpos, new cjs.Rectangle(0,0,300,90.3), null);


(lib.primary_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAAQABgQAHgJQAJgLAPABQAPgBAIAKQAIAHgBAOIgBAMIgqAAQABAJAFADQAFAEAIgBQALAAALgEIgCAOQgKAEgLABQglAAAAglgAANgFQAAgRgMAAQgMAAgCARIAaAAIAAAAg");
	this.shape.setTransform(110.65,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAkIAAhFIAQAAIABAKQAFgMAKAAIAHABQAAAJgBAHIgIgBQgIAAgEAEIAAAzg");
	this.shape_1.setTransform(104.9,18.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAbQgJgJAAgSQAAgQAJgKQAJgJAPAAQAQAAAJAJQAJAKAAAQQAAARgJAKQgJAKgQAAQgPAAgJgKgAgOAAQAAAWAOAAQAPAAAAgWQAAgVgPAAQgOAAAAAVg");
	this.shape_2.setTransform(98.125,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhAkIAAgqQAAgOgMAAQgHAAgFAFIAAAFIAAAuIgRAAIAAgqQAAgOgLAAQgHAAgGAFIAAAzIgSAAIAAhFIAQAAIACALQAGgNANAAQAPAAAFANQAHgNAOAAQAXAAAAAZIAAAug");
	this.shape_3.setTransform(88.425,18.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAXIAAhCQAIgCAKAAIAAAVIATAAIgCAPIgRAAIAAAeQAAALAIAAQAFAAAFgCIgCAOQgGACgHABQgVAAAAgYg");
	this.shape_4.setTransform(76.975,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAdQgFgGAAgMIAAguIASAAIAAArQAAAOALAAQAGAAAGgGIAAgzIASAAIAABFIgRAAIgBgLQgGANgMAAQgMAAgGgHg");
	this.shape_5.setTransform(70.425,18.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAbQgJgJAAgSQAAgQAJgKQAJgJAPAAQAQAAAJAJQAJAKAAAQQAAARgJAKQgJAKgQAAQgPAAgJgKgAgOAAQAAAWAOAAQAPAAAAgWQAAgVgPAAQgOAAAAAVg");
	this.shape_6.setTransform(62.775,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAqQgJgJABgSQgBgkAkAAIAJAAIAAgaQAJgCAJAAIAABiIgRAAIgBgJQgGAKgLABQgMAAgHgJgAgMAPQAAAWAOgBQAHAAAFgEIAAgnIgKAAQgQAAAAAWg");
	this.shape_7.setTransform(51.65,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMAkIAAgqQAAgOgMAAQgFAAgGAFIAAAzIgSAAIAAhFIAQAAIACALQAGgNAMAAQAMAAAFAHQAGAGAAAMIAAAug");
	this.shape_8.setTransform(44.225,18.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAzIAAhFIARAAIAABFgAgGggQgEgDAAgFQAAgEAEgDQADgDADAAQAEAAADADQADADABAEQgBAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(38.6,16.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAwIAAhgIA3AAQAAAIgBAIIgkAAIAAAZIAiAAQAAAHgCAIIggAAIAAAog");
	this.shape_10.setTransform(33.625,16.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#EC0000").ss(1,1,1).p("AolipIRLAAQBHAAAxAyQAyAyAABFQAABGgyAyQgxAyhHAAIxLAAQhHAAgygyQgxgyAAhGQAAhFAxgyQAygyBHAAg");
	this.shape_11.setTransform(72,17);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC0000").s().p("AolCqQhHAAgygyQgxgyAAhGQAAhFAxgyQAygyBHAAIRLAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAg");
	this.shape_12.setTransform(72,17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC0000").s().p("AgUAbQgIgKAAgRQAAgPAHgKQAIgKAOAAQAPAAAHAIQAHAIgBAPIAAAIIgtAAQACAWAUAAQALAAAKgFIgCALQgJAEgKAAQgRAAgJgJgAARgFQAAgUgQAAQgPAAgCAUIAhAAIAAAAg");
	this.shape_13.setTransform(109.5,18.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EC0000").s().p("AgSAjIAAhEIAMAAIAAAKQAGgMALAAIAIABIgBALIgJAAQgJgBgGAHIAAA0g");
	this.shape_14.setTransform(104.025,18.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC0000").s().p("AgXAbQgIgKAAgRQAAgQAIgKQAJgJAOAAQAPAAAIAJQAJAKAAAQQAAARgJAKQgIAJgPAAQgOAAgJgJgAgSAAQAAAaASAAQATAAAAgaQAAgZgTAAQgSAAAAAZg");
	this.shape_15.setTransform(97.425,18.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC0000").s().p("AAlAjIAAgqQAAgRgPgBQgJAAgHAIIAAAHIAAAtIgLAAIAAgqQAAgRgPgBQgJAAgHAIIAAA0IgMAAIAAhEIALAAIABALQAHgNAOAAQAPAAAEANQAIgNAPAAQALAAAFAHQAGAGAAAMIAAAtg");
	this.shape_16.setTransform(87.825,18.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EC0000").s().p("AgQAYIAAhDQAFgCAHAAIAAAVIAVAAIgBAKIgUAAIAAAlQAAANAKAAQAGAAAFgDIgCAKQgGADgGAAQgTAAAAgWg");
	this.shape_17.setTransform(76.775,17.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EC0000").s().p("AgVAdQgGgGABgMIAAguIAMAAIAAArQgBASAPAAQAIAAAHgIIAAg1IANAAIAABFIgMAAIAAgKQgIALgMABQgLgBgGgGg");
	this.shape_18.setTransform(70.3,18.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EC0000").s().p("AgXAbQgIgKAAgRQAAgQAIgKQAJgJAOAAQAPAAAIAJQAJAKAAAQQAAARgJAKQgIAJgPAAQgOAAgJgJgAgSAAQAAAaASAAQATAAAAgaQAAgZgTAAQgSAAAAAZg");
	this.shape_19.setTransform(62.875,18.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC0000").s().p("AgVApQgHgJAAgSQAAgjAhgBIAMABIAAgbQAFgBAHAAIAABhIgLAAIgBgJQgGALgLAAQgNAAgIgJgAgQAOQAAAaASAAQAJAAAGgGIAAgsQgFgCgHAAQgVAAAAAag");
	this.shape_20.setTransform(52.225,16.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EC0000").s().p("AAPAjIAAgqQAAgRgOgBQgJAAgHAIIAAA0IgMAAIAAhEIALAAIABALQAHgNANAAQALAAAGAHQAGAGAAAMIAAAtg");
	this.shape_21.setTransform(44.975,18.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EC0000").s().p("AgFAyIAAhFIALAAIAABFgAgEgjQgCgDAAgDQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_22.setTransform(39.5,16.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EC0000").s().p("AgZAwIAAhgIAzAAIgBAMIgmAAIAAAfIAkAAIgBAKIgjAAIAAArg");
	this.shape_23.setTransform(34.825,16.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAbQgIgKAAgRQAAgPAHgKQAIgKAOAAQAPAAAHAIQAHAIgBAPIAAAIIgtAAQACAWAUAAQALAAAKgFIgCALQgJAEgKAAQgRAAgJgJgAARgFQAAgUgQAAQgPAAgCAUIAhAAIAAAAg");
	this.shape_24.setTransform(109.5,18.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAjIAAhEIAMAAIAAAKQAGgMALAAIAIABIgBALIgJAAQgJgBgGAHIAAA0g");
	this.shape_25.setTransform(104.025,18.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXAbQgIgKAAgRQAAgQAIgKQAJgJAOAAQAPAAAIAJQAJAKAAAQQAAARgJAKQgIAJgPAAQgOAAgJgJgAgSAAQAAAaASAAQATAAAAgaQAAgZgTAAQgSAAAAAZg");
	this.shape_26.setTransform(97.425,18.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAlAjIAAgqQAAgRgPgBQgJAAgHAIIAAAHIAAAtIgLAAIAAgqQAAgRgPgBQgJAAgHAIIAAA0IgMAAIAAhEIALAAIABALQAHgNAOAAQAPAAAEANQAIgNAPAAQALAAAFAHQAGAGAAAMIAAAtg");
	this.shape_27.setTransform(87.825,18.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQAYIAAhDQAFgCAHAAIAAAVIAVAAIgBAKIgUAAIAAAlQAAANAKAAQAGAAAFgDIgCAKQgGADgGAAQgTAAAAgWg");
	this.shape_28.setTransform(76.775,17.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVAdQgGgGABgMIAAguIAMAAIAAArQgBASAPAAQAIAAAHgIIAAg1IANAAIAABFIgMAAIAAgKQgIALgMABQgLgBgGgGg");
	this.shape_29.setTransform(70.3,18.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgXAbQgIgKAAgRQAAgQAIgKQAJgJAOAAQAPAAAIAJQAJAKAAAQQAAARgJAKQgIAJgPAAQgOAAgJgJgAgSAAQAAAaASAAQATAAAAgaQAAgZgTAAQgSAAAAAZg");
	this.shape_30.setTransform(62.875,18.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVApQgHgJAAgSQAAgjAhgBIAMABIAAgbQAFgBAHAAIAABhIgLAAIgBgJQgGALgLAAQgNAAgIgJgAgQAOQAAAaASAAQAJAAAGgGIAAgsQgFgCgHAAQgVAAAAAag");
	this.shape_31.setTransform(52.225,16.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAPAjIAAgqQAAgRgOgBQgJAAgHAIIAAA0IgMAAIAAhEIALAAIABALQAHgNANAAQALAAAGAHQAGAGAAAMIAAAtg");
	this.shape_32.setTransform(44.975,18.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAyIAAhFIALAAIAABFgAgEgjQgCgDAAgDQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_33.setTransform(39.5,16.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgZAwIAAhgIAzAAIgBAMIgmAAIAAAfIAkAAIgBAKIgjAAIAAArg");
	this.shape_34.setTransform(34.825,16.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgXAgIACgKQAIAEALAAQAOAAAAgJQAAgEgDgDQgCgCgGgCIgGgCQgSgFAAgPQAAgJAHgFQAGgFALAAQAMAAAJADIgCAKQgJgDgJAAQgNAAAAAJQAAAHALAEIAGACQASAFAAAOQAAAJgGAGQgIAFgLAAQgOAAgIgEg");
	this.shape_35.setTransform(101.375,18.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgMAfIAAhPQAFgBAHAAIAABPQAAAKAHAAQAEAAACgCIgBAKQgEACgFAAQgPAAAAgTg");
	this.shape_36.setTransform(96.725,16.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgFAyIAAhFIALAAIAABFgAgFgjQgCgDAAgDQAAgEACgCQADgCACAAQAEAAACACQACACAAAEQAAADgCADQgCACgEAAQgCAAgDgCg");
	this.shape_37.setTransform(92.75,16.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgUAfQgGgGAAgKQAAgLAIgFQAJgHAVgBIADAAIAAgDQAAgHgDgDQgEgDgIAAQgLAAgLAFIABgKQAKgFANAAQAZAAAAAXIAAAvIgLAAIAAgKQgHALgNAAQgKAAgGgFgAgJAEQgFAEAAAHQAAAFADADQADAEAGAAQALAAAGgJIAAgSIgCAAQgQAAgGAEg");
	this.shape_38.setTransform(87.425,18.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgUAbQgJgKAAgRQAAgPAIgKQAIgKAPAAQANAAAIAIQAGAIABAPIgBAIIgtAAQACAWAUAAQAMAAAKgFIgCALQgKAEgLAAQgQAAgJgJgAASgFQAAgUgRAAQgPAAgCAUIAiAAIAAAAg");
	this.shape_39.setTransform(75.8,18.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgMAfIAAhPQAFgBAHAAIAABPQAAAKAHAAQAEAAACgCIgBAKQgEACgFAAQgPAAAAgTg");
	this.shape_40.setTransform(60.275,16.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMAfIAAhPQAFgBAHAAIAABPQAAAKAHAAQAEAAACgCQAAAFgBAFQgEACgFAAQgPAAAAgTg");
	this.shape_41.setTransform(56.375,16.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAdQgGgGABgMIAAguIALAAIAAArQABASAOAAQAIAAAIgIIAAg1IAMAAIAABFIgLAAIgBgKQgHALgNABQgLgBgGgGg");
	this.shape_42.setTransform(50.25,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_34,p:{x:34.825}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:52.225}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:76.775}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_34,p:{x:43.475}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_31,p:{x:68.375}},{t:this.shape_39},{t:this.shape_28,p:{x:82.025}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,146,36);


(lib.mc_level3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgHAIQgDgDAAgFQAAgEADgDQAEgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape.setTransform(221.725,41.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgbA2QgKgNAAgWQAAgvArAAIAQABIAAgiQAHgDAJAAIAAB/IgPAAIgBgNQgIAOgPABQgQgBgKgKgAgVASQAAAiAYAAQALAAAIgJIAAg4QgHgCgJAAQgbAAAAAhg");
	this.shape_1.setTransform(214.375,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgaAiQgLgMAAgWQAAgUAKgMQAKgOATAAQASAAAJAMQAJAKAAASIgBAMIg6AAQADAcAaAAQAPAAAMgHIgCAOQgNAGgNAAQgWAAgLgNgAAXgGQgBgbgVAAQgUAAgCAbIAsAAIAAAAg");
	this.shape_2.setTransform(205.25,37.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgVAfIAAhXQAHgCAJAAIAAAaIAbAAIgCAOIgZAAIAAAvQAAARANAAQAHAAAGgEIgBAOQgIADgIAAQgZAAAAgcg");
	this.shape_3.setTransform(198.075,36.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgVAfIAAhXQAHgCAJAAIAAAaIAbAAIgCAOIgZAAIAAAvQAAARANAAQAHAAAGgEIgBAOQgIADgIAAQgZAAAAgcg");
	this.shape_4.setTransform(191.975,36.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgHBAIAAhZIAPAAIAABZgAgGgtQgDgDAAgFQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_5.setTransform(186.425,35.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAwAuIAAg3QAAgXgUAAQgLAAgKAKIABAIIAAA8IgPAAIAAg3QAAgXgTAAQgMAAgJAKIAABEIgPAAIAAhZIAOAAIABAOQAJgQASAAQAUAAAGAQQAKgQASAAQAOAAAIAJQAHAIAAAOIAAA8g");
	this.shape_6.setTransform(176.725,37.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgXAuIAAhZIAOAAIACANQAHgPAOAAIAKACIgBANIgLgBQgMAAgHAJIAABEg");
	this.shape_7.setTransform(166.5,37.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgaAiQgLgMAAgWQAAgUAKgMQAKgOATAAQASAAAJAMQAJAKAAASIAAAMIg7AAQADAcAaAAQAPAAAMgHIgCAOQgNAGgNAAQgWAAgLgNgAAWgGQABgbgWAAQgTAAgDAbIArAAIAAAAg");
	this.shape_8.setTransform(158.15,37.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgkBBIAAh/IAOAAIABAMQAHgOAQAAQARAAAJAMQAKAMAAAWQAAAvgrAAIgQgBIAAAlgAgVgqIAAA4QAHACAJAAQAbAAAAghQAAgigYAAQgLAAgIAJg");
	this.shape_9.setTransform(149.15,39.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgaAiQgLgMAAgWQAAgUAJgMQALgOATAAQASAAAJAMQAJAKAAASIgBAMIg6AAQADAcAZAAQAQAAAMgHIgCAOQgNAGgNAAQgVAAgMgNgAAXgGQgBgbgVAAQgUAAgCAbIAsAAIAAAAg");
	this.shape_10.setTransform(135.6,37.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgXAuIAAhZIAPAAIABANQAHgPAOAAIAKACIgBANIgLgBQgMAAgHAJIAABEg");
	this.shape_11.setTransform(128.55,37.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgbAmQgIgIAAgPIAAg8IAQAAIAAA3QAAAXATAAQALAAAJgKIAAhEIAQAAIAABZIgPAAIgBgOQgJAQgRAAQgOAAgHgIg");
	this.shape_12.setTransform(119.925,37.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgeApQAAgHACgGQALAGAOAAQASAAAAgMQAAgGgDgDQgDgDgIgDIgHgCQgYgGAAgUQAAgLAIgHQAJgHAPAAQAOAAAMAEIgCANQgMgEgLAAQgSAAAAAMQAAAKAPAEIAIADQAXAGAAASQAAAMgJAHQgJAIgPAAQgRAAgLgGg");
	this.shape_13.setTransform(111.225,37.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgdAiQgLgMAAgWQAAgVALgMQAKgNATAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgSAAgLgNgAgYAAQAAAiAYAAQAZAAAAgiQAAghgZAAQgYAAAAAhg");
	this.shape_14.setTransform(102.475,37.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgQAoIAAhlQAGgDAJAAIAABnQAAAMAKAAQAFAAADgBQAAAGgCAHQgFACgGAAQgUAAAAgZg");
	this.shape_15.setTransform(95.675,36.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgSAjQgMgMgBgXQABgWAMgMQAKgMAUAAQALAAAIAEIgBANQgIgEgKAAQgMAAgHAJQgHAJgBAPQABAQAHAJQAHAJAMAAQALAAAIgFIgCAOQgHAEgLAAQgTAAgKgMg");
	this.shape_16.setTransform(88.85,37.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgVAfIAAhXQAHgCAJAAIAAAaIAbAAIgCAOIgZAAIAAAvQAAARANAAQAHAAAGgEIgBAOQgIADgIAAQgZAAAAgcg");
	this.shape_17.setTransform(78.475,36.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AAUAuIAAg3QAAgXgTAAQgLAAgJAKIAABEIgQAAIAAhZIAPAAIABAOQAJgQARAAQAOAAAHAJQAIAIAAAOIAAA8g");
	this.shape_18.setTransform(70.275,37.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgbAmQgIgIAAgPIAAg8IAQAAIAAA3QAAAXATAAQALAAAJgKIAAhEIAQAAIAABZIgPAAIgBgOQgJAQgRAAQgOAAgHgIg");
	this.shape_19.setTransform(60.475,37.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgdAiQgLgMAAgWQAAgVALgMQAKgNATAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgSAAgLgNgAgYAAQAAAiAYAAQAZAAAAgiQAAghgZAAQgYAAAAAhg");
	this.shape_20.setTransform(50.875,37.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgSAjQgNgMAAgXQAAgWANgMQALgMASAAQAMAAAIAEIgBANQgIgEgKAAQgMAAgHAJQgIAJAAAPQAAAQAIAJQAHAJAMAAQALAAAIgFIgCAOQgHAEgLAAQgSAAgLgMg");
	this.shape_21.setTransform(42.25,37.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgTAjQgMgMABgXQgBgWAMgMQALgMAUAAQALAAAJAEIgCANQgIgEgJAAQgNAAgHAJQgIAJABAPQgBAQAIAJQAHAJANAAQAKAAAJgFIgCAOQgIAEgLAAQgSAAgMgMg");
	this.shape_22.setTransform(34.55,37.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgaAoQgIgHAAgNQAAgPALgHQAMgIAbgCIAEAAIAAgDQAAgKgFgEQgEgEgLAAQgPAAgOAHIABgNQANgHARAAQAhAAAAAeIAAA9IgOAAIgBgNQgIAPgSAAQgMAAgIgHgAAQAAQgUAAgIAFQgHAFAAAJQAAAHAEAEQAFAEAHAAQAOAAAJgLIAAgYg");
	this.shape_23.setTransform(25.975,37.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgXAuIAAhZIAOAAIACANQAHgPAOAAIAKACIgBANIgLgBQgMAAgHAJIAABEg");
	this.shape_24.setTransform(15.3,37.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgdAiQgLgMAAgWQAAgVALgMQAKgNATAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgSAAgLgNgAgYAAQAAAiAYAAQAZAAAAgiQAAghgZAAQgYAAAAAhg");
	this.shape_25.setTransform(6.775,37.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgeApQAAgHACgGQALAGAOAAQASAAAAgMQAAgGgDgDQgDgDgIgDIgHgCQgYgGAAgUQAAgLAIgHQAJgHAPAAQAOAAAMAEIgCANQgMgEgLAAQgSAAAAAMQAAAKAPAEIAIADQAXAGAAASQAAAMgJAHQgJAIgPAAQgRAAgLgGg");
	this.shape_26.setTransform(270.425,17.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgQAoIAAhlQAGgDAJABIAABmQAAANAKAAQAFAAADgCQAAAGgCAHQgFABgGAAQgUAAAAgYg");
	this.shape_27.setTransform(264.425,16.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AgaAoQgIgHAAgNQAAgPALgHQAMgIAbgCIAEAAIAAgDQAAgKgFgEQgEgEgLAAQgPAAgOAHIABgNQANgHARAAQAhAAAAAeIAAA9IgOAAIgBgNQgIAPgSAAQgMAAgIgHgAAQAAQgUAAgIAFQgHAFAAAJQAAAHAEAEQAFAEAHAAQAOAAAJgLIAAgYg");
	this.shape_28.setTransform(256.725,17.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AAXAtIgXhDIgVBDIgPAAIgehZIAQAAIAWBHIAWhHIANAAIAYBJIAVhJIAQAAIgfBZg");
	this.shape_29.setTransform(245.5,17.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgaAoQgIgHAAgNQAAgPALgHQAMgIAbgCIAEAAIAAgDQAAgKgFgEQgEgEgLAAQgPAAgOAHIABgNQANgHARAAQAhAAAAAeIAAA9IgOAAIgBgNQgIAPgSAAQgMAAgIgHgAAQAAQgUAAgIAFQgHAFAAAJQAAAHAEAEQAFAEAHAAQAOAAAJgLIAAgYg");
	this.shape_30.setTransform(233.775,17.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgXAuIAAhZIAOAAIABANQAIgOAOAAIAKABIgBANIgLgBQgMAAgIAJIAABEg");
	this.shape_31.setTransform(226.95,17.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgbA2QgKgNAAgWQAAgvArAAIAQABIAAgiQAHgDAJABIAAB+IgPAAIgBgMQgIAOgPgBQgQABgKgLgAgVASQAAAiAYAAQALAAAIgJIAAg4QgHgCgJAAQgbAAAAAhg");
	this.shape_32.setTransform(218.125,16.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AAUBAIAAg4QAAgWgTAAQgLAAgJAKIAABEIgQAAIAAh8QAHgDAJABIAAAyQAJgPARAAQAOAAAHAJQAIAHAAAOIAAA9g");
	this.shape_33.setTransform(208.825,16.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AgVAfIAAhWQAHgDAJAAIAAAaIAbAAIgCAOIgZAAIAAAvQAAARANAAQAHAAAGgDIgBANQgIADgIAAQgZAAAAgcg");
	this.shape_34.setTransform(201.225,16.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgHBAIAAhZIAPAAIAABZgAgGguQgDgDAAgEQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_35.setTransform(195.675,16);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AAWAtIgWhDIgWBDIgNAAIgghZIAQAAIAXBHIAWhHIAOAAIAXBJIAVhJIAPAAIgeBZg");
	this.shape_36.setTransform(186.6,17.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AgKAWQAEgSABgXQAGgDAKAAQgDAegIAOg");
	this.shape_37.setTransform(173.35,22.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AgeApQAAgHACgGQALAGAOAAQASAAAAgMQAAgGgDgDQgDgDgIgDIgHgCQgYgGAAgUQAAgLAIgHQAJgHAPAAQAOAAAMAEIgCANQgMgEgLAAQgSAAAAAMQAAAKAPAEIAIADQAXAGAAASQAAAMgJAHQgJAIgPAAQgRAAgLgGg");
	this.shape_38.setTransform(167.325,17.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AgVAfIAAhWQAHgDAJAAIAAAaIAbAAIgCAOIgZAAIAAAvQAAARANAAQAHAAAGgDIgBANQgIADgIAAQgZAAAAgcg");
	this.shape_39.setTransform(160.675,16.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AgHBAIAAhZIAPAAIAABZgAgGguQgDgDAAgEQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_40.setTransform(155.125,16);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AgeApQAAgHACgGQALAGAOAAQASAAAAgMQAAgGgDgDQgDgDgIgDIgHgCQgYgGAAgUQAAgLAIgHQAJgHAPAAQAOAAAMAEIgCANQgMgEgLAAQgSAAAAAMQAAAKAPAEIAIADQAXAGAAASQAAAMgJAHQgJAIgPAAQgRAAgLgGg");
	this.shape_41.setTransform(149.125,17.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AgdAiQgLgMAAgWQAAgVALgMQAKgNATAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgSAAgLgNgAgYAAQAAAiAYAAQAZAAAAgiQAAghgZAAQgYAAAAAhg");
	this.shape_42.setTransform(140.375,17.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AglBBIAAh/IAPAAIABAMQAIgOAPAAQARAAAIAMQAKAMAAAWQAAAvgqAAIgQgBIAAAlgAgVgqIAAA4QAHACAJAAQAbAAAAghQAAgigXAAQgMAAgIAJg");
	this.shape_43.setTransform(131.1,19.725);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AgaAiQgLgMAAgWQAAgUAJgMQALgOATAAQASAAAKAMQAIAKAAASIAAAMIg7AAQADAcAZAAQAPAAANgHIgCAOQgNAGgNAAQgVAAgMgNgAAXgGQAAgbgWAAQgTAAgDAbIAsAAIAAAAg");
	this.shape_44.setTransform(121.4,17.925);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AgbA2QgKgNAAgWQAAgvArAAIAQABIAAgiQAHgDAJABIAAB+IgPAAIgBgMQgIAOgPgBQgQABgKgLgAgVASQAAAiAYAAQALAAAIgJIAAg4QgHgCgJAAQgbAAAAAhg");
	this.shape_45.setTransform(111.825,16.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AgQAoIAAhlQAGgDAJABIAABmQAAANAKAAQAFAAADgCQAAAGgCAHQgFABgGAAQgUAAAAgYg");
	this.shape_46.setTransform(101.425,16.15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("AgaAoQgIgHAAgNQAAgPALgHQAMgIAbgCIAEAAIAAgDQAAgKgFgEQgEgEgLAAQgPAAgOAHIABgNQANgHARAAQAhAAAAAeIAAA9IgOAAIgBgNQgIAPgSAAQgMAAgIgHgAAQAAQgUAAgIAFQgHAFAAAJQAAAHAEAEQAFAEAHAAQAOAAAJgLIAAgYg");
	this.shape_47.setTransform(93.725,17.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AAUAuIAAg3QAAgXgTAAQgLAAgJAKIAABEIgQAAIAAhZIAPAAIABAOQAJgQARAAQAOAAAHAJQAIAIAAAOIAAA8g");
	this.shape_48.setTransform(84.675,17.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#666666").s().p("AgdAiQgLgMAAgWQAAgVALgMQAKgNATAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgSAAgLgNgAgYAAQAAAiAYAAQAZAAAAgiQAAghgZAAQgYAAAAAhg");
	this.shape_49.setTransform(74.975,17.925);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("AgHBAIAAhZIAPAAIAABZgAgGguQgDgDAAgEQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_50.setTransform(68.075,16);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("AgVAfIAAhWQAHgDAJAAIAAAaIAbAAIgCAOIgZAAIAAAvQAAARANAAQAHAAAGgDIgBANQgIADgIAAQgZAAAAgcg");
	this.shape_51.setTransform(63.275,16.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#666666").s().p("AgHBAIAAhZIAPAAIAABZgAgGguQgDgDAAgEQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_52.setTransform(57.725,16);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#666666").s().p("AgbA2QgKgNAAgWQAAgvArAAIAQABIAAgiQAHgDAJABIAAB+IgPAAIgBgMQgIAOgPgBQgQABgKgLgAgVASQAAAiAYAAQALAAAIgJIAAg4QgHgCgJAAQgbAAAAAhg");
	this.shape_53.setTransform(50.525,16.15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#666666").s().p("AgbA2QgKgNAAgWQAAgvArAAIAQABIAAgiQAHgDAJABIAAB+IgPAAIgBgMQgIAOgPgBQgQABgKgLgAgVASQAAAiAYAAQALAAAIgJIAAg4QgHgCgJAAQgbAAAAAhg");
	this.shape_54.setTransform(40.925,16.15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AgaAoQgIgHAAgNQAAgPALgHQAMgIAbgCIAEAAIAAgDQAAgKgFgEQgEgEgLAAQgPAAgOAHIABgNQANgHARAAQAhAAAAAeIAAA9IgOAAIgBgNQgIAPgSAAQgMAAgIgHgAAQAAQgUAAgIAFQgHAFAAAJQAAAHAEAEQAFAEAHAAQAOAAAJgLIAAgYg");
	this.shape_55.setTransform(31.675,17.925);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#666666").s().p("AgdAiQgLgMAAgWQAAgVALgMQAKgNATAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgSAAgLgNgAgYAAQAAAiAYAAQAZAAAAgiQAAghgZAAQgYAAAAAhg");
	this.shape_56.setTransform(18.775,17.925);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#666666").s().p("AAfA/IgvhNQgIgMgFgMIAAAuIAAA3IgOAAIAAh6QAHgDAHAAIAuBKIANAXIgBgyIAAgsQAIgDAHAAIAAB9g");
	this.shape_57.setTransform(8.025,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_level3, new cjs.Rectangle(0,0,276.5,49.9), null);


(lib.mc_level2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAQgHAAgGgGg");
	this.shape.setTransform(309.6,72.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglA3IAAibQALgEAQAAIAAAwIAwAAIgCAXIguAAIAABWQAAAcAYAAQAMAAAMgGIgEAYQgMAGgOAAQguAAABgyg");
	this.shape_1.setTransform(300.75,64.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiA/QgVgWAAgpQAAgpAWgVQATgUAiAAQAUAAAQAGQAAALgCAMQgPgGgRAAQgXAAgNAQQgMAQAAAcQAAAcAMAQQANAPAXAAQATAAAPgIIgEAYQgNAHgUAAQghAAgUgUg");
	this.shape_2.setTransform(287.75,66.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgvBHQgPgNAAgXQABgbATgMQAVgPAxgDIAHAAIAAgGQAAgRgIgHQgIgIgSAAQgcAAgZANQABgNACgLQAWgLAgAAQA5AAAAA0IAABtIgZAAIgCgWQgOAagfAAQgYAAgNgMgAAegCQgmACgOAJQgNAIAAAQQAAANAIAHQAIAIAOAAQAZAAAPgUIAAgrg");
	this.shape_3.setTransform(272.5,66.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgqBRIAAidIAaAAIACAWQANgaAaAAQAJAAAJACQAAAOgDAKQgJgBgKgBQgWAAgNAQIAAB5g");
	this.shape_4.setTransform(260.375,66.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglA3IAAibQALgEAQAAIAAAwIAwAAIgCAXIguAAIAABWQAAAcAYAAQAMAAAMgGIgDAYQgOAGgNAAQgtAAAAgyg");
	this.shape_5.setTransform(248.9,64.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAjBRIAAhiQABgpgjAAQgTAAgRASIAAB5IgcAAIAAidIAaAAIACAYQAQgcAfAAQAZAAAOAPQAMAOAAAZIAABrg");
	this.shape_6.setTransform(234.25,66.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag1A9QgSgWgBgnQAAgmATgWQATgWAiAAQAiAAATAWQAUAWgBAmQABAngUAWQgTAWgiAAQghAAgUgWgAgrAAQAAA8ArAAQAsAAAAg8QAAg8gsAAQgrAAAAA8g");
	this.shape_7.setTransform(217.05,66.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgxBTQgZgfgBg0QAAg0AagfQAcggAtABQAgAAATAKQAAAOgEALQgRgLgbAAQgiAAgTAYQgTAXAAArQAAArAUAYQATAXAhAAQAcAAAUgLQgCASgDALQgVAIgYgBQgvABgbghg");
	this.shape_8.setTransform(199.9,63.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglA3IAAibQALgEAQAAIAAAwIAwAAIgCAXIguAAIAABWQAAAcAYAAQAMAAAMgGIgDAYQgOAGgNAAQgtAAAAgyg");
	this.shape_9.setTransform(179.15,64.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgNByIAAidIAbAAIAACdgAgLhSQgGgEAAgJQAAgIAGgFQAEgFAHAAQAIAAAFAFQAFAFAAAIQAAAIgFAFQgFAFgIAAQgGABgFgGg");
	this.shape_10.setTransform(169.275,63.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag2BIQAAgMADgLQAUALAZAAQAiAAAAgWQAAgJgHgGQgFgFgOgFIgOgFQgqgLAAgjQAAgVAPgLQAPgMAbAAQAaAAAUAHQgBANgCAKQgVgIgVAAQgeAAAAAWQAAARAaAIIAOAFQApAMABAgQAAAVgQANQgRANgcAAQgeAAgTgLg");
	this.shape_11.setTransform(158.6,66.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag0A9QgUgWAAgnQABgmASgWQATgWAiAAQAjAAASAWQAUAWAAAmQAAAngUAWQgTAWgiAAQgiAAgSgWgAgrAAQAAA8ArAAQAsAAAAg8QAAg8gsAAQgrAAAAA8g");
	this.shape_12.setTransform(143.1,66.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhCBzIAAjhIAaAAIACAVQAOgZAbAAQAdAAARAUQASAVAAApQAABThNAAQgPAAgNgCIAABCgAgmhMIAABlQAMADAQAAQAxAAAAg7QAAg9gqAAQgVAAgOAQg");
	this.shape_13.setTransform(126.525,69.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgvA9QgUgWAAgnQAAglARgVQATgYAiAAQAgAAARAUQAQASAAAhQAAANgCAIIhoAAQAFAyAvAAQAZAAAXgNQgBAPgDAKQgWALgYAAQgnAAgUgWgAAngMQAAgwglAAQgkAAgEAwIBNAAIAAAAg");
	this.shape_14.setTransform(109.275,66.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhSBxIAAjcQAYgFAhAAQA4AAAcAhQAYAdAAAzQAAA0gbAdQgbAfgzAAgAg2hWIAACvIAhAAQBLAAAAhZQAAhXhPAAg");
	this.shape_15.setTransform(91.5,63.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgwBeQgSgVAAgoQABhUBMAAQAPAAANACIAAg9QAMgEAPAAIAADhIgZAAIgBgVQgPAZgcAAQgdAAgQgVgAgmAgQAAA8AqAAQAVAAAOgQIAAhkQgMgEgPAAQgyAAAAA8g");
	this.shape_16.setTransform(64.45,63.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgvA9QgUgWAAgnQAAglARgVQATgYAiAAQAgAAARAUQAQASAAAhQAAANgCAIIhoAAQAFAyAvAAQAZAAAXgNQgBAPgDAKQgWALgYAAQgnAAgUgWgAAngMQAAgwglAAQgkAAgEAwIBNAAIAAAAg");
	this.shape_17.setTransform(48.225,66.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAmBPIgmg5IgoA5IgeAAIA4hOIg3hPIAgAAIAlA6IAog6IAeAAIg3BOIA4BPg");
	this.shape_18.setTransform(32.8,66.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgNByIAAidIAbAAIAACdgAgLhSQgGgEAAgJQAAgIAGgFQAEgFAHAAQAIAAAFAFQAFAFAAAIQAAAIgFAFQgFAFgIAAQgGABgFgGg");
	this.shape_19.setTransform(21.625,63.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag8BvIAAjdIB5AAQgBAMgCAOIhZAAIAABHIBUAAQAAAOgCAKIhSAAIAABkg");
	this.shape_20.setTransform(10.85,63.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAjBxIAAhjQAAgoghAAQgVAAgQASIAAB5IgcAAIAAjdQAMgEAQAAIAABbQAQgcAfAAQAZAAANAPQAOAOAAAZIAABsg");
	this.shape_21.setTransform(315.45,27.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AglA3IAAibQALgEAQAAIAAAwIAwAAIgCAXIguAAIAABWQAAAcAYAAQANAAALgGIgDAYQgOAGgNAAQgtAAAAgyg");
	this.shape_22.setTransform(301.9,28.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAjBRIAAhiQABgpgjAAQgTAAgRASIAAB5IgcAAIAAidIAaAAIACAYQAQgcAeAAQAaAAAOAPQANAOgBAZIAABrg");
	this.shape_23.setTransform(287.25,30.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag1A9QgSgWgBgnQAAgmATgWQATgWAiAAQAjAAASAWQATAWAAAmQAAAngTAWQgTAWgiAAQghAAgUgWgAgrAAQAAA8ArAAQAsAAAAg8QAAg8gsAAQgrAAAAA8g");
	this.shape_24.setTransform(270.05,30.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABVBRIAAhiQAAgpgiAAQgUAAgSASIACAOIAABrIgbAAIAAhiQgBgpghAAQgWAAgQASIAAB5IgbAAIAAidIAZAAIACAYQAQgcAfAAQAkAAALAcQASgcAhAAQAZAAANAPQAOAOAAAZIAABrg");
	this.shape_25.setTransform(248.1,30.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhBBxIAAgKQAAgcATgYQANgRAegXQAkgbAAgfQABgogxAAQgYAAgXAMQAAgRACgKQAVgKAcAAQAkAAAUASQARAQAAAdQAAAYgNAVQgMARgZATQgWASgKAJQgNAOgDAOIBmAAQAAANgDANg");
	this.shape_26.setTransform(218.45,27);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AASBxIAAjFQggAFgeAMQgBgLADgQQAogQAwgCIAADhg");
	this.shape_27.setTransform(199.75,27);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgqBRIAAieIAaAAIACAYQANgbAaAAQAJAAAJACQAAAOgDALQgJgCgKAAQgWAAgNAPIAAB5g");
	this.shape_28.setTransform(180.925,30.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgxBCQgNgOAAgaIAAhqIAcAAIAABiQAAAoAhAAQAVAAAQgRIAAh5IAbAAIAACdIgZAAIgCgYQgQAcgfAAQgZAAgNgPg");
	this.shape_29.setTransform(165.525,30.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag0A9QgUgWAAgnQABgmASgWQATgWAiAAQAjAAASAWQAUAWAAAmQAAAngUAWQgTAWgiAAQgiAAgSgWgAgrAAQAAA8ArAAQAsAAAAg8QAAg8gsAAQgrAAAAA8g");
	this.shape_30.setTransform(148.5,30.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAjBxIAAhjQAAgoghAAQgVAAgQASIAAB5IgcAAIAAjdQAMgEAQAAIAABbQAQgcAfAAQAZAAANAPQANAOAAAZIAABsg");
	this.shape_31.setTransform(124.55,27.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AglA3IAAibQALgEAQAAIAAAwIAwAAIgCAXIguAAIAABWQAAAcAYAAQANAAALgGIgDAYQgNAGgOAAQgtAAAAgyg");
	this.shape_32.setTransform(111,28.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgNByIAAieIAbAAIAACegAgLhSQgGgFAAgHQAAgJAGgFQAEgFAHAAQAIAAAFAFQAFAFAAAJQAAAHgFAFQgFAFgIABQgGAAgFgGg");
	this.shape_33.setTransform(101.125,26.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AApBPIgoh3IgoB3IgZAAIg3idIAdAAIAoB+IAnh+IAYAAIAqCBIAmiBIAbAAIg1Cdg");
	this.shape_34.setTransform(84.925,30.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgvA9QgUgWAAgnQAAglARgVQATgYAiAAQAgAAARAUQAQASAAAhQAAANgCAIIhoAAQAFAyAvAAQAZAAAXgNQgBAPgDAKQgWALgYAAQgnAAgUgWgAAngMQAAgwglAAQgkAAgEAwIBNAAIAAAAg");
	this.shape_35.setTransform(57.425,30.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgMBPIg7idIAdAAIAqCCIAsiCIAcAAIg6Cdg");
	this.shape_36.setTransform(41.875,30.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgvBHQgPgNAAgXQABgbATgMQAVgPAxgDIAHAAIAAgGQAAgRgIgHQgIgIgSAAQgdAAgXANQAAgNACgLQAWgLAgAAQA5AAAAA0IAABtIgZAAIgCgWQgNAaghAAQgXAAgNgMgAAegCQgmACgOAJQgNAIAAAQQAAANAIAHQAIAIAOAAQAZAAAPgUIAAgrg");
	this.shape_37.setTransform(26,30.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhEBmQAAgOAEgKQAZANAfAAQAWAAANgKQANgJAAgSQAAgQgKgKQgJgIgVgIIgRgHQgygTAAgqQAAgdASgPQATgPAjAAQAfAAAZALQgCAMgDALQgYgKgaAAQgsABAAAhQAAARAJAJQAIAHAUAIIARAGQA1ATAAAsQAAAcgUAQQgVASglAAQgkAAgXgNg");
	this.shape_38.setTransform(10.275,27.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_level2, new cjs.Rectangle(0,0,326.2,86.4), null);


(lib.mc_level1_final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_299 = function() {
		if (!this.looped) this.looped = 1;
		if (this.looped++ == 1) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(1));

	// s
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC0000").s().p("AhsCQQABgXAHgXQAnAWAvABQBDAAAAgrQAAgUgNgMQgKgJgcgLIgZgKQgpgPgSgTQgYgXAAglQAAgpAdgYQAegWA2AAQAzAAAoANQgCAbgFATQgpgOgnAAQg/AAAAApQAAAgA1AUIAaAKQAqARATASQAVAVAAAiQAAAqgfAZQggAbg6AAQg4AAgogXg");
	this.shape.setTransform(309.925,203.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30).to({_off:false},0).wait(270));

	// g
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC0000").s().p("AhpDWQgBgXAFgZQAqAVArAAQBdAAAAhgIAAgpQgbAxg3AAQg7AAgggpQgjgrAAhPQAAipCZAAQA9AAAxARIAAEuQAACUiTAAQgyAAgogUgAhLhCQAAB3BUAAQAoAAAcgfIAAjLQgZgHgeAAQhhAAAAB6g");
	this.shape_1.setTransform(279.45,210.325);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(29).to({_off:false},0).wait(271));

	// n
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC0000").s().p("ABGCjIAAjNQAAgngRgRQgSgTgpAAQgdAAgiAJIAAEPIg3AAIAAkxQBBgUA2ABQCCgBAABxIAADUg");
	this.shape_2.setTransform(247.825,203.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(28).to({_off:false},0).wait(272));

	// i
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC0000").s().p("AgbDkIAAk9IA2AAIAAE9gAgZilQgJgKgBgQQABgQAJgKQALgKAOAAQAPAAAKAKQAKAKAAAQQAAAQgKAKQgKAKgPAAQgOAAgLgKg");
	this.shape_3.setTransform(224.35,196.625);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(27).to({_off:false},0).wait(273));

	// v
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC0000").s().p("AgaCfIhyk9IA6AAIBTEAIBUkAIA4AAIhyE9g");
	this.shape_4.setTransform(203.5,203.525);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(26).to({_off:false},0).wait(274));

	// a
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC0000").s().p("AhfB+QgigqAAhTQAAinCXABQA7gBAxASIAAEzIgzAAIgDgrQgcAzg2AAQg6AAgfgpgAhJAAQAAB5BQAAQAogBAcgeIAAjMQgagGgcAAQheAAAAB4g");
	this.shape_5.setTransform(172.325,203.55);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(25).to({_off:false},0).wait(275));

	// s
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC0000").s().p("AhsCQQABgXAHgXQAnAWAvABQBDAAAAgrQAAgUgNgMQgKgJgcgLIgZgKQgpgPgSgTQgYgXAAglQAAgpAdgYQAegWA2AAQAzAAAoANQgCAbgFATQgpgOgnAAQg/AAAAApQAAAgA1AUIAaAKQAqARATASQAVAVAAAiQAAAqgfAZQggAbg6AAQg4AAgogXg");
	this.shape_6.setTransform(144.075,203.55);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(24).to({_off:false},0).wait(276));

	// r
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC0000").s().p("AhTCiIAAkyQAwgRA3AAQAmAAAbAGQAAAegGARQgWgGglAAQgWAAgaAGIAAEOg");
	this.shape_7.setTransform(109.05,203.225);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(23).to({_off:false},0).wait(277));

	// u
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC0000").s().p("Ah8AyIAAjUIA3AAIAADNQAAAnARARQASATApAAQAdAAAhgJIAAkPIA4AAIAAExQhBAUg2AAQiCAAAAhxg");
	this.shape_8.setTransform(79.975,203.925);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(22).to({_off:false},0).wait(278));

	// o
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC0000").s().p("AhpB6QglgsAAhOQAAhOAlgrQAlgsBEAAQBFAAAlAsQAlArAABOQAABOglAsQgmAthEAAQhDAAgmgtgAhVAAQAAB5BVAAQBXAAAAh5QAAh4hXAAQhVAAAAB4g");
	this.shape_9.setTransform(47.425,203.55);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(21).to({_off:false},0).wait(279));

	// y
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC0000").s().p("Ah2DjQAAgdADgRIAUACQAcAAARgRQATgRANgtIiAlOIA6AAIBeELIBVkLIA4AAIh9FnQgiBlhOAAQgPAAgNgDg");
	this.shape_10.setTransform(16.625,210.7);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(20).to({_off:false},0).wait(280));

	// w
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC0000").s().p("ABNCfIhMjwIhNDwIgzAAIhrk9IA6AAIBNEAIBMkAIAzAAIBPECIBKkCIA2AAIhpE9g");
	this.shape_11.setTransform(178.65,131.125);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(17).to({_off:false},0).wait(283));

	// o
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC0000").s().p("AhpB5QglgrAAhOQAAhOAlgrQAlgtBEAAQBFAAAlAtQAlArAABOQAABOglArQgmAuhEgBQhDABgmgugAhVAAQAAB4BVAAQBXAAAAh4QAAh4hXAAQhVAAAAB4g");
	this.shape_12.setTransform(138.925,131.15);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(16).to({_off:false},0).wait(284));

	// r
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC0000").s().p("AhUCiIAAkyQAxgRA3AAQAlAAAbAGQABAegGARQgWgGglAAQgWAAgaAGIAAEOg");
	this.shape_13.setTransform(113.25,130.825);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(15).to({_off:false},0).wait(285));

	// g
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EC0000").s().p("AhpDWQgBgXAFgZQAqAVArAAQBdAAAAhgIAAgpQgbAxg3AAQg7AAgggpQgjgrAAhPQAAipCZAAQA8AAAyARIAAEuQAACUiTAAQgyAAgogUgAhLhCQAAB3BUAAQApAAAbgfIAAjLQgZgHgeAAQhhAAAAB6g");
	this.shape_14.setTransform(83.35,137.925);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(14).to({_off:false},0).wait(286));

	// o
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC0000").s().p("AhpB5QglgrAAhOQAAhOAlgrQAlgtBEAAQBFAAAlAtQAlArAABOQAABOglArQgmAuhEgBQhDABgmgugAhVAAQAAB4BVAAQBXAAAAh4QAAh4hXAAQhVAAAAB4g");
	this.shape_15.setTransform(39.175,131.15);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(13).to({_off:false},0).wait(287));

	// t
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC0000").s().p("AhLBwIAAk5QAXgJAgAAIAABgIBgAAIgFAuIhbAAIAACvQAAA4AwAAQAZABAWgMIgGAvQgXALgeAAQhbAAAAhig");
	this.shape_16.setTransform(13.4,126.75);
	this.shape_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(12).to({_off:false},0).wait(288));

	// d
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EC0000").s().p("AhgC8QgjgqAAhQQAAipCZABQAeAAAZADIAAh5QAYgJAfABIAAHCIgzAAIgEgsQgaA0g4AAQg7gBgggpgAhLBAQAAB4BUAAQAoAAAcgfIAAjLQgZgHgeAAQhhAAAAB5g");
	this.shape_17.setTransform(292.35,52.45);
	this.shape_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(9).to({_off:false},0).wait(291));

	// e
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EC0000").s().p("AheB6QgngsAAhQQAAhIAhgsQAmgwBDABQBBAAAhAnQAfAlAABCIgDAoIjOAAQAHBnBgABQAzAAAsgaQgDAegGATQgkAXg5AAQhLgBgogsgABNgbQgBhdhIAAQhHAAgIBdICYAAIAAAAg");
	this.shape_18.setTransform(260.9,58.75);
	this.shape_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(8).to({_off:false},0).wait(292));

	// e
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EC0000").s().p("AheB6QgngsAAhQQAAhIAhgsQAmgwBDABQBBAAAhAnQAfAlAABCIgDAoIjPAAQAIBnBgABQAzAAAsgaQgDAegGATQgjAXg6AAQhLgBgogsgABNgbQgBhdhIAAQhHAAgIBdICYAAIAAAAg");
	this.shape_19.setTransform(229.5,58.75);
	this.shape_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(7).to({_off:false},0).wait(293));

	// t
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC0000").s().p("AhLBwIAAk5QAXgIAggBIAABgIBgAAIgFAvIhbAAIAACtQAAA5AwABQAZAAAWgNIgHAwQgWAMgeAAQhbAAAAhjg");
	this.shape_20.setTransform(204.65,54.35);
	this.shape_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(6).to({_off:false},0).wait(294));

	// n
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EC0000").s().p("ABGCjIAAjNQAAgngRgRQgSgTgpAAQgdAAgiAJIAAEPIg3AAIAAkxQBBgUA2ABQCCgBAABxIAADUg");
	this.shape_21.setTransform(177.025,58.35);
	this.shape_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(5).to({_off:false},0).wait(295));

	// a
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EC0000").s().p("AhfB+QgigqAAhTQAAinCXABQA7gBAxASIAAEzIgzAAIgDgrQgcAzg2AAQg6gBgfgogAhJAAQAAB5BQAAQAoAAAcgfIAAjLQgagHgcAAQheAAAAB4g");
	this.shape_22.setTransform(143.325,58.75);
	this.shape_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(4).to({_off:false},0).wait(296));

	// r
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EC0000").s().p("AhUCiIAAkyQAxgRA3AAQAlAAAbAGQABAegGARQgWgGglAAQgWAAgaAGIAAEOg");
	this.shape_23.setTransform(118.65,58.425);
	this.shape_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(3).to({_off:false},0).wait(297));

	// a
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EC0000").s().p("AhfB+QgigqAAhTQAAinCXABQA7gBAxASIAAEzIgzAAIgDgrQgcAzg2AAQg6gBgfgogAhJAAQAAB5BQAAQAoAAAcgfIAAjLQgagHgcAAQheAAAAB4g");
	this.shape_24.setTransform(88.975,58.75);
	this.shape_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(2).to({_off:false},0).wait(298));

	// u
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EC0000").s().p("Ah8AyIAAjUIA3AAIAADNQAAAnARARQASATApAAQAdAAAhgJIAAkPIA4AAIAAExQhBAUg2AAQiCAAAAhxg");
	this.shape_25.setTransform(57.175,59.125);
	this.shape_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1).to({_off:false},0).wait(299));

	// G
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EC0000").s().p("AhwCnQgzg9AAhrQAAhtA3g9QA3g7BlAAQBDAAAuAUQgBAUgIAdQgxgTg3AAQhIAAgoAtQgoAvAABXQAABXAlAuQAnAxBGgBQAiABAfgIIAAixIA5AAIAADTQg2AYhGAAQhjAAg1hAg");
	this.shape_26.setTransform(20.675,52.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325.1,241.2);


(lib.mc_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC0000").s().dr(-150,-300,300,600);
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_background, new cjs.Rectangle(0,0,300,600), null);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_299 = function() {
		if (!this.looped) this.looped = 1;
		if (this.looped++ == 2) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EC0000").ss(2,1,1).p("EgXRgutMAujAAAMAAABdbMgujAAAg");
	this.shape.setTransform(150.0109,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	// logo_pos
	this.instance = new lib.SantanderInternationalpos();
	this.instance.parent = this;
	this.instance.setTransform(322.2,111.8,0.6667,0.6661,0,0,0,408.3,122.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

	// primary_cta
	this.instance_1 = new lib.primary_cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,553,1,1,0,0,0,72,17);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.primary_cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160).to({_off:false},0).to({alpha:1},30).wait(110));

	// header
	this.instance_2 = new lib.mc_level1_final();
	this.instance_2.parent = this;
	this.instance_2.setTransform(92.05,204.9,0.7196,0.7197,0,0,0,86.2,76.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).wait(256));

	// subheader
	this.instance_3 = new lib.mc_level2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(78.95,385.35,0.7196,0.7197,0,0,0,68,42.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:false},0).to({alpha:1},30).wait(170));

	// T_C
	this.instance_4 = new lib.mc_level3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(78.95,450.75,0.7196,0.7197,0,0,0,68,42.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(130).to({_off:false},0).to({alpha:1},30).wait(140));

	// background_colour
	this.instance_5 = new lib.mc_background();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-300},29,cjs.Ease.quartInOut).wait(271));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,-300,150,900);
// library properties:
lib.properties = {
	id: '05920BE2A36F420086AAC3866015E257',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['05920BE2A36F420086AAC3866015E257'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;